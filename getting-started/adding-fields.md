---
title: Adding Configuration Fields
description: Learn how to add configuration fields to your configuration class, and learn what types of fields are supported.
---

# Adding Configuration Fields

Once you've created your configuration class, you can start adding fields to it.

All fields in your configuration class must be public, non-final and non-static, you must also annotate them with the `@SerialEntry` annotation.

```java
public class MyModConfig {
  // ...

  @SerialEntry
  public String myString = "Hello, World!";

  @SerialEntry
  public int myInt = 42;

  @SerialEntry
  public boolean myBoolean = true;

  // ...
}
```

All fields with the `@SerialEntry` annotation will be serialized and deserialized when you call `HANDLER.load()` and `HANDLER.save()` respectively.

Anything without the `@SerialEntry` annotation will be ignored.

## Field Comments

::: info
To enable comments using the GSON serializer, you must use the `setJson5(true)` method on the `GsonConfigSerializerBuilder` when building your serializer.
:::

If you're using a serializer that supports comments, you can add comments to your fields using the `comment` field of the `@SerialEntry` annotation.

```java
public class MyModConfig {
  // ...

  @SerialEntry(comment = "This is a comment!")
  public String myString = "Hello, World!";

  // ...
}
```

## Supported Field Types

The types of fields that are supported soley depend on the serializer you're using.

### GSON

GSON supports the following field types:

- Primatives (`boolean`, `char`, `int`, `float` etc.)
- Objects (classes with a no-args constructor)
- Arrays (of any type specified in this list)
- Lists (of any type specified in this list)
- Enums
- Maps (of any type(s) specified in this list)

For more information, you should refer to the [GSON documentation](https://github.com/google/gson/blob/main/UserGuide.md#using-gson)

