Mindweb is a collaboration tool used to edit mindmaps using the Freeplane 
format.

The service is available at https://mindweb.itworks.hu.

---

This package contains the classes used for communication between the fron-end 
and the backend.

It's primary feature beside the classes is a dynamic registry, which can be used
to restore classes received in JSON formatted string to proper instances, so the
class specific methods can be used. 

It also allows to use implementations of the classes, should it be required for
the application. (Eg. request.execute on server side)

It tries to mimic dynamic class loading available in OOP languages.