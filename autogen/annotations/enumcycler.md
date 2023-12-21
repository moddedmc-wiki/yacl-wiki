---
title: The @EnumCycler Annotation
description: Documentation on the @EnumCycler annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @EnumCycler Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/EnumCycler.java" />

The `@EnumCycler` annotation creates an option with a `CyclingListControllerBuilder` controller. If the enum implements `CyclableEnum`, the allowed values will be used from that, rather than every single enum constant in the class. If not, `EnumCycler.allowedOrdinals()` is used.

There are two methods of formatting for enum values. First, if the enum implements `NameableEnum`, `NameableEnum.getDisplayName()` is used. Otherwise, the translation key `yacl3.config.enum.{ENUM_CLASS_NAME}.{ENUM_NAME}` where `{ENUM_CLASS_NAME}` is the exact name of the class and `{NAME}` is equal to the lower case of `Enum#name()`.

## Usage

```java
@AutoGen(...)
@EnumCycler()
public MyEnum myEnum = MyEnum.VALUE_1;

// ...
public enum MyEnum {
    VALUE_1,
    VALUE_2,
    VALUE_3
}
```

In this case, the translation keys will be:

- `yacl3.config.enum.MyEnum.value_1`
- `yacl3.config.enum.MyEnum.value_2`
- `yacl3.config.enum.MyEnum.value_3`

## Value Formatting

As mentioned, if the enum implements the `NameableEnum` interface, `NameableEnum.getDisplayName()` is used to format the enum value. Otherwise, the translation key format is used.

```java
public enum MyEnum implements NameableEnum {
    VALUE_1("Value 1"),
    VALUE_2("Value 2"),
    VALUE_3("Value 3");

    private final String displayName;
    MyEnum(String displayName) {
        this.displayName = displayName;
    }
    
    @Override
    public Text/Component getDisplayName() {
        return Text/Component.of(displayName);
    }
}
```

So in this case, the display names will be specified by the `displayName` property of each enum constant because the enum implements `NameableEnum` and overrides `NameableEnum.getDisplayName()`.

## `allowedOrdinals`

The `allowedOrdinals` property is used to set the allowed ordinals of the enum class. If empty, all ordinals are allowed. This is only used if the enum does not implement `CyclableEnum`.

This is optional, by default all ordinals are allowed, unless specified in the `CyclableEnum` implementation (if applicable).

```java
public enum MyEnum implements CyclableEnum {
    VALUE_1,
    VALUE_2,
    VALUE_3;
    MyEnum() {};

    @Override
    public MyEnum[] allowedValues() {
        // Only allow values 1 and 3
        return new MyEnum[] { VALUE_1, VALUE_3 };
    }
}