# Search Display Instructions
In some cases, it might be beneficial to edit the search display fields used whenever you do a search. All search display fields are housed in a single file, **SearchDisplayFieldsBase.xml**. This is the only instance where youwould edit a base file. It is important to save a copy of the original file, in the event of any catastrophic errors.

1. Navigate to the XML folder and find **SearchDisplayFieldsBase.xml**.
2. Make a backup copy  in a safe location.
3. Make sure you have the right search group (work order, inspection, etc.) for the search you need to edit.
4. Make the needed edits and save the file.
Below is an example of what a specific Search Display Field entry will look like:

```xml
<SearchDisplayField>
	<SeqID>1</SeqID>
	<FormName>WOSearch2</FormName>
	<TableName>WorkOrder</TableName>
	<FieldName>ApplyToEntity</FieldName>
	<Caption>{{WOSearch2_WorkOrder_ApplyToEntity}}</Caption>
	<Visible>Y</Visible>
	<Selected>N</Selected>
	<DataType>String</DataType>
	<IsPublic>Y</IsPublic>
	<ShapeFileField>ApplyToEnt</ShapeFileField>
</SearchDisplayField>
```
The most common edits have to do with the following tags:
* **SeqID:** Change the order of the fields within the search display fields selector.
* **Caption:** Change the way that the field names are displayed.
* **Visible:** Make the field visible (Y) or invisible (N) to the user.
* **Selected:** Make the field selected (Y) or deselected (N) by default.