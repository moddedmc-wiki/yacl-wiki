---
title: The @FloatSlider Annotation
description: Documentation on the @FloatSlider annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @FloatSlider Annotation

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/FloatSlider.java" />

![float slider example](./_assets/floatslider.png)

The `@FloatSlider` annotation is an option factory that creates a regular option with a `FloatSliderControllerBuilder` controller.

## Usage

```java
@AutoGen(...)
@FloatSlider(min = 0, max = 1, format = "%.2f")
public float myFloatOption = 0.5f;
```

## `min`

The `min` property is used to set the minimum value of the slider. If a user enters a value less than this, it will be clamped to this value.

If this is set to `-Float.MAX_VALUE`, there will be no minimum.

If the current value is at this minimum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.min` will be used.

The default value is `-Float.MAX_VALUE`.

## `max`

The `max` property is used to set the maximum value of the slider. If a user enters a value more than this, it will be clamped to this value.

If this is set to `Float.MAX_VALUE`, there will be no maximum.

If the current value is at this maximum, if available, the translation key `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.fmt.max` will be used.

The default value is `Float.MAX_VALUE`.

## `step`

The `step` property is used to set the step size of the slider. For example, if this is set to 0.1, the slider will increment/decrement by 0.1 when dragging, no less, no more and will always be a multiple of 0.1.

The default value is 0.01.

## `format`

The `format` property is used to set the format used to display the float. This is the syntax used in `String#format(String, Object...)`.