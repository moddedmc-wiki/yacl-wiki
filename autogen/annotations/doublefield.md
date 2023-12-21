---
title: The @DoubleField Annotation
description: Documentation on the @DoubleField annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @DoubleField Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/DoubleField.java" />

The `@DoubleField` annotation creates an option with a `DoubleFieldControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@DoubleField(min = 0, max = 1, format = "%.2f")
public double myDoubleOption = 0.5;
```

## `min`

The `min` property is used to set the minimum value of the field. If a user enters a value less than this, it will be clamped to this value.

If this is set to `-Double.MAX_VALUE`, there will be no minimum.

If the current value is at this minimum, if available, the translation key `yacl3.config.$configId.$fieldName.fmt.min` will be used.

The default value is `-Double.MAX_VALUE`.

## `max`

The `max` property is used to set the maximum value of the field. If a user enters a value more than this, it will be clamped to this value.

If this is set to `Double.MAX_VALUE`, there will be no minimum.

If the current value is at this maximum, if available, the translation key `yacl3.config.$configId.$fieldName.fmt.max` will be used.

The default value is `Double.MAX_VALUE`.

## `format`

The `format` property is used to set the format used to display the double. This is the syntax used in `String#format(String, Object...)`.

The default value is `%.2f`, meaning that the double will be displayed with 2 decimal places.

