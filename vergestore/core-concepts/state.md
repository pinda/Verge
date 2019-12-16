# State

VergeStore uses a **single state-tree. \(Recommended\)**  
That means an object contains all of the application's state.  
With this, we can get to achieve **"single source of truth"**

```swift
struct State {
  
  var count: Int = 0
  
}
```

That state is managed by **Store**.  
It process updating the state and notify updated events to the subscribers.

{% hint style="info" %}
VergeStore does support multiple state-tree as well.  
Depending on the case, we can create another Store instance.
{% endhint %}

### StateType protocol

VergeStore provides `StateType` protocol as a helper.

It will be used in State struct that Store uses.  
`StateType` protocol is just providing the extensions to mutate easily in the nested state.

Just like this.

```swift
public protocol StateType {
}

extension StateType {

  public mutating func update<T>(target keyPath: WritableKeyPath<Self, T>, update: (inout T.Wrapped) throws -> Void) rethrows where T : VergeStore._VergeStore_OptionalProtocol

  public mutating func update<T>(target keyPath: WritableKeyPath<Self, T>, update: (inout T) throws -> Void) rethrows

  public mutating func update(update: (inout Self) throws -> Void) rethrows
}
```
