---
title: The @AutoGen Annotation
description: Documentation on the @AutoGen annotation.
---

<script setup>
import ViewGithub from '../../components/ViewGithub.vue'
</script>

# The @AutoGen Annotation 

<ViewGithub url="https://github.com/isXander/YetAnotherConfigLib/blob/1.20.x/dev/common/src/main/java/dev/isxander/yacl3/config/v2/api/autogen/AutoGen.java" />

As previously mentioned in the [Setup Page](/autogen/setup), the `@AutoGen` annotation is used to mark fields as options to display on the generated configuration screen.

# Usage

```java
public class MyConfig {
  @AutoGen(category = "test_category", group = "test_group")
  @SomeController(...)
  public boolean myOption = true;
}
```

## `category`

The ID of the category to put the option in.


## `group`

If you want fields to be grouped together into an option group, you can set this to the ID of the option group to put the option in.

This is an optional field.

## Translations

The `@AutoGen` annotation will automatically read from preset translation keys:

- `yacl3.config.{CONFIG_ID}.{FIELD_NAME}` - Option name.
- `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.desc` - Option description.
- `yacl3.config.{CONFIG_ID}.category.{CATEGORY_ID}` - Category name.
- `yacl3.config.{CONFIG_ID}.category.{CATEGORY_ID}.group.{GROUP_ID}` - Option group name.