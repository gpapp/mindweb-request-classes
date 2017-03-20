import {assert} from "chai";
import {AbstractObjectFactory} from "../service/AbstractObjectFactory";
import {AbstractRequest} from "../request/AbstractRequest";
import {AbstractResponse} from "../response/AbstractResponse";
import {MindwebService} from "../service/MindwebService";
/**
 * Created by gpapp on 2017.03.20..
 */

class TestResponse extends AbstractResponse {
    constructor() {
        super();
    }
}
class TestComplexResponse extends AbstractResponse {
    get strParam() {
        return this._strParam
    }

    get strArrParam() {
        return this._strArrParam
    }

    get boolParam() {
        return this._boolParam
    }

    get dateParam() {
        return this._dateParam
    }

    get numberParam() {
        return this._numberParam
    }

    constructor(private _strParam: string,
                private _strArrParam: string[],
                private _boolParam: boolean,
                private _dateParam: Date,
                private _numberParam: number) {
        super();
    }
}
abstract class TestRequest extends AbstractRequest {

}
class TestRequestImpl1 extends TestRequest {
    constructor(private _strParam: string, private _strArrParam: string[]) {
        super();
    }

    protected internalExecute(userId: string, kafkaService: MindwebService, callback: (response: AbstractResponse) => void): void {
    }
}
class TestRequestImpl2 extends TestRequest {
    get strParam() {
        return this._strParam
    }

    get strArrParam() {
        return this._strArrParam
    }

    constructor(private _strParam: string, private _strArrParam: string[],) {
        super();
    }

    protected internalExecute(userId: string, kafkaService: MindwebService, callback: (response: AbstractResponse) => void): void {
    }
}
class TestResponseFactory extends AbstractObjectFactory<AbstractResponse> {
    initialize() {
        this.registerClass("TestResponse", TestResponse);
        this.registerClass("TestComplexResponse", TestComplexResponse);
    }
}
class TestRequestFactory extends AbstractObjectFactory<AbstractRequest> {
    initialize() {
        this.registerClass("TestRequest", TestRequestImpl2);
    }
}
let testResponseFactory: TestResponseFactory;
let testRequestFactory: TestRequestFactory;

before(function (next) {
    testResponseFactory = new TestResponseFactory();
    testRequestFactory = new TestRequestFactory();
    next();
});
describe('Create simple message', () => {
    it('Create a simple message and read it back from stringify result', () => {
        const toTest = new TestResponse();
        const testRes = testResponseFactory.create(JSON.stringify(toTest));
        assert.instanceOf(testRes, TestResponse);
    });
    it('Create a complex message and read it back from stringify result', () => {
        const toTest = new TestComplexResponse("StringTest", ["StringArrTest1", "StringArrTest2"], true, new Date(), 12345678.9012);
        const testRes: TestComplexResponse = testResponseFactory.create(JSON.stringify(toTest)) as TestComplexResponse;
        assert.instanceOf(testRes, TestComplexResponse);
        assert.deepEqual(testRes, toTest);
    });

    it('Create a message from another class and read it back from stringify result', () => {
        const toTest = new TestRequestImpl1("StringTest", ["StringArrTest1", "StringArrTest2"]);
        toTest['name'] = 'TestRequest';
        const testRes = testRequestFactory.create(JSON.stringify(toTest));
        assert.instanceOf(testRes, TestRequestImpl2);
        assert.deepEqual(testRes, toTest);
    });
});