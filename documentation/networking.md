# Networking

Access to core networking functionality can be obtained by using ``this.context.connection`` from a component. [The built-in backend server](https://glitch.com/edit/#!/needle-tiny-server) requires users to be connected to a room.

Networking is currently based on [websockets](https://github.com/jjxxs/websocket-ts) and sending either json strings (for infrequent updates) or [flatbuffers](https://google.github.io/flatbuffers/) (for frequent updates).

Source code for networking is at ``engine/engine_networking.ts``.

## Using Multiplayer

- **Enable Networking**  
  Add a `SyncedRoom` component.

- **Enable Desktop Viewer Sync**  
  Add a `SyncedCamera` component.

- **Enable XR Avatar Sync**  
  Add a `WebXRSync` component.
  
- **Enable Voice Chat**  
  Add a `VoIP` component.

> **Note**: these components can be anywhere inside your `GltfObject` hierarchy. They can also all be on the same GameObject.


## Core Components

- ``SyncedRoom`` — handles networking connection and connection to a room
- ``SyncedTransform`` — handles synchronizing transforms
- ``SyncedCamera`` — spawns a prefab for any user connected to the room which will follow their position
- ``WebXRSync`` — handles synchronization for AR and VR users
- ``VoIP`` — handles voice-over-IP audio connections, microphone access etc. between users
- ``Networking`` — use to customize server backend url


## Manual Networking
> 🏗️ Under construction

### Sending

Send a json message to all users in the same room:   
``this.context.connection.send(key:string, data: IModel | object | boolean | string | number | null)``

Send a flatbuffer binary array to all users in the same room:   
``this.context.connect.sendBinary(arr:Uint8Array)``

#### Persistence
When sending an object containing a `guid` field it will saved in the persistant storage and automatically sent to users that connect later or come back later to the site (e.g. to restore state).   
To delete state for a specific guid from the backend storage you can use `delete-state` as the key and provide an object with `{ guid: "guid_to_delete" } ` 

### Receiving
Subscribe to json events / listen to events in the room using a specific key  
``this.context.connection.beginListen(key:string, callback:(data) => void)``   
Unsubscribe with ``stopListening``

Subscribe to flatbuffer binary events   
``this.context.connection.beginListenBinrary(identifier:string, callback:(data : ByteBuffer) => void)``   
Unsubscribe with ``stopListenBinary``

## Auto Networking (experimental)

To automatically network fields in a component you can just decorate a field with a ``@syncField()`` decorator (note: you need to have ``experimentalDecorators: true`` in your ``tsconfig.json`` file for it to work)

Example:
```ts
import { Behaviour } from "@needle-tools/engine"
import { syncField } from "@needle-tools/engine/engine/engine_networking_auto";

export class AutoFieldSync extends Behaviour implements IPointerClickHandler {

    @syncField("myValueChanged")
    mySyncedValue?: number = 1;
    
    private myValueChanged() {
       console.log("My value changed", this.mySyncedValue);
    }
    
    onPointerClick() {
       this.mySyncedValue = Math.random();
    }
}
```

## Flatbuffers for your own components

- [Using the schema compiler](https://google.github.io/flatbuffers/flatbuffers_guide_using_schema_compiler.html)
- [Generating a schema](https://google.github.io/flatbuffers/flatbuffers_guide_writing_schema.html)
- [Flatbuffer in Typescript](https://google.github.io/flatbuffers/flatbuffers_guide_use_typescript.html)

> 🏗️ Under construction


## Built-in Networking on Glitch

When deploying your app to Glitch, we include a simple networking backend that is great for prototyping and small deployments (~12-20 people at the same time). You can later update to a bigger/better/stronger networking solution if required.  

### Limitations

- approx. 12-20 people maximum – afterwards the tiny Glitch server instance becomes slow

### How to upgrade to a stronger server

> 🏗️ Under construction.

### How to use your own networking implementation

> 🏗️ Under construction.

### How to change from the default ICE/STUN servers used for VoIP

> 🏗️ Under construction.
