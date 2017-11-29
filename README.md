#  Prototype Inheritance

Prototype Inheritance is a different type of inheritance from classical Object Oriented presence.

With classical object oriented inheritance class object as defined in a hierarchy of generalization/specification relationships where specializations inherit the behaviour of the parent and then can extend or override parent behaviour and state.

It is the single inheritance aspect of classical object oriented inheritance that causes problems , as any parent with more than a single responsibility couples the 2 responsibilities in all children.  You end up with awkward rigid taxonomies that eventually become incorrect.

```
The coupling between a parent and child is the tighest form of coupling in OO design.
```

I can accept this statement as a limitation of a single parent seems quite restrictive.


[This content]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain ) suggests that prototypical inheritance is more powerful than classical inheritance.
```
While this is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model is in fact more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.
```  

I expect this statement is based on the fact that it is possible to have a prototype that composes behaviours from multiple sources and that can effectively provide inheritance from multiple parents.


## Confusion

In putting together the tests I found the implementation of Object.create to be confusing.

I was expecting the following pieces of code to be equivalent but they are not.
````
var proto = { func1: () ->"func1"}
var comp = { func2: () ->"func2"}
var o = Object.create(proto)
Object.assign(o,comp)
```

````
var proto = { func1: () ->"func1"}
var comp = { func2: () ->"func2"}
var o = Object.create(proto,comp)
```

They appear to be different however.
