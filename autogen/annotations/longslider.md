---
title: The @LongSlider Annotation
description: Documentation on the @LongSlider annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @LongSlider Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/LongSlider.java" />

![long slider example](./_assets/longslider.png)

The `@LongSlider` annotation creates an option with a `LongSliderControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@LongSlider(min = 0, max = 10, step = 1)
public long myLongOption = 5;
```

## `min`

The `min` property is used to set the minimum value of the slider. If a user enters a value less than this, it will be clamped to this value.

If this is set to `Long.MIN_VALUE`, there will be no minimum.

If the current value is at this minimum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.min` will be used.

The default value is `Long.MIN_VALUE`.

## `max`

The `max` property is used to set the maximum value of the slider. If a user enters a value more than this, it will be clamped to this value.

If this is set to `Long.MAX_VALUE`, there will be no maximum.

If the current value is at this maximum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.max` will be used.

The default value is `Long.MAX_VALUE`.

## `step`

The `step` property is used to set the step size of the slider. For example, if this is set to 1, the slider will increment/decrement by 1 when dragging, no less, no more and will always be a multiple of 1.

The default value is 1.

## `format`

The `format` property is used to set the format used to display the integer. This is the syntax used in `String#format(String, Object...)`.

The default value is `%.0f`, meaning that the integer will be displayed with no decimal places.