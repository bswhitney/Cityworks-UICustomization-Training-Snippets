# Using XML in Designer
Designer uses many of the same rules and patterns as other XML edits.
## Adding a Designer Home Shortcut
The following code, between the `layout` tags on the **DesignerHome.xml** file, adds a shortcut to the Bulk Import page. Note that in order to do this, we have to inject an XML element representing a link.

```xml
<panel id="Body">
	<row moveBefore="Contractors" cssClass="item">
		<html cssClass="navbutton" href="BulkImport.aspx" tag="a">
			<text id="BulkImportText">Bulk Import</text>
		</html>
	</row>
</panel>
```
## Remove a Designer Home Shortcut
The following code, also between `layout` tags, removes a shortcut from the designer home. Note that because the button already exists, we simply have to make it invisible.

```xml
<button id="EquipmentChangeOut" visible="false"></button>
```