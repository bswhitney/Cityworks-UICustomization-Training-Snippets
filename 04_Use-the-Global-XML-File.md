# Using the Global XML File
**Global.xml**, which corresponds with **GlobalBase.xml**, is the file used to edit various elements that appear on multiple pages, such as the user menu, search bar, or various messages.

## Change the Label of an Item in the User Menu
The following code, between the `messages` tags, changes the text of the "User Settings" button in the user menu to "My Preferences":

```xml
<message id="UserSettings">
	<value>My Settings</value>
</message>
```
## Change the Text of a Pop-up Message
When in the asset panel you have no assets selected, but click the "Edit Asset" button, a message box appears across the top of the screen. The following code, between the `messages` tags, translates the text of that message box into Portuguese:

```xml
<message id="PleaseSelectAsset">
	<value>Por favor selecione um ativo.</value>
</message>
```
## Change the Search Bar Placeholder
The following code, between the `messages` tags, changes the value of the search bar placeholder:

```xml
<message  id="SearchPlaceholder">
	<value>Search Work Activities...</value>
</message>
```