---
title: The @Boolean Annotation
description: Documentation on the @Boolean annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @Boolean Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/Boolean.java" />

![boolean option](./_assets/boolean.png)

The `@Boolean` annotation creates an option with a `BooleanControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@Boolean(formatter = Boolean.Formatter.YES_NO, colored = true)
public boolean myOption = true;
```

## `formatter`

The `formatter` property is used to display the boolean. It has four options:

- `YES_NO`: Displays the boolean as "Yes" for true and "No" for false.
- `TRUE_FALSE`: Displays the boolean as "True" for true and "False" for false.
- `ON_OFF`: Displays the boolean as "On" for true and "Off" for false.
- `CUSTOM`: Uses the translation keys `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.true` for true and `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.false` for false.

By default, the formatter is set to `TRUE_FALSE`.

## `colored`

The `colored` property determines whether to color the formatted text green and red depending on the value: true or false respectively. By default, this property is set to false.

