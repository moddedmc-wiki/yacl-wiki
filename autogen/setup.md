---
title: Autogen Setup
description: Learn how to set up automatic screen generation using YACL.
---

# Autogen Setup

Automatic screen generation is the easiest way to generate a config screen, however it's also the most limited.

It uses annotations to generate the screen, this means that you can't customize the screen as much as you can with manual generation.

## Generating a Screen

To generate a screen, you should first create a static method in your configuration class:

```java
public class MyConfig {
  private static final ConfigHandler<MyConfig> HANDLER = ...;

  public static Screen createScreen(@Nullable Screen parent) {
    // Generate the screen, and return it.
    return HANDLER.generateGui().generateScreen(parent);
  }
}
```

## Marking fields as options.

Whilst `@SerialEntry` will ensure that a field is serialized, it won't mark it as an option to display on the generated configuration screen.

This is where the `@AutoGen` annotation comes in, alongside with the various controller annotations, which are listed on the sidebar.

In this example, a boolean field is being marked as an option, and the category ID is being set to `category_id`, a simple boolean controller is being used.

```java
public class MyConfig {
  private static final ConfigHandler<MyConfig> HANDLER = ...; // Handler has an ID of "mymod:config" for this example.

  // ...

  @AutoGen(category = "category_id")
  @Boolean(formatter = Boolean.Formatter.YES_NO, colored = true)
  public boolean myOption = true;
}
```

The autogen field has a few parameters, some of which are optional:

- `category` - The ID of the category to put the option in, **this is NOT optional.**
- `group` - If you want fields to be grouped together into an option group, you can set this to the ID of the option group to put the option in, **this is optional.**

An example of a field being put into an option group:

```java
public class MyConfig {
  private static final ConfigHandler<MyConfig> HANDLER = ...; // Handler has an ID of "mymod:config" for this example.

  // ...

  @AutoGen(category = "test_category", group = "test_group")
  @Boolean(formatter = Boolean.Formatter.YES_NO, colored = true)
  public boolean myOption = true;
}
```

## Translations

Unlike manual generation, automatic generation will automatically read from preset translation keys:

- `yacl3.config.{CONFIG_ID}.{FIELD_NAME}` - Option name.
- `yacl3.config.{CONFIG_ID}.{FIELD_NAME}.desc` - Option description.
- `yacl3.config.{CONFIG_ID}.category.{CATEGORY_ID}` - Category name.
- `yacl3.config.{CONFIG_ID}.category.{CATEGORY_ID}.group.{GROUP_ID}` - Option group name.

For example, the `myOption` field from the previous example would use the following translation keys:

```jsonc
{
  // The option name.
  "yacl3.config.mymod:config.myOption": "My Option",

  // The option description.
  "yacl3.config.mymod:config.myOption.desc": "My Option Description",

  // The category's name.
  "yacl3.config.mymod:config.category.test_category": "Test Category",

  // The option group's name
  "yacl3.config.mymod:config.category.test_category.group.test_group": "Test Group"
}
```