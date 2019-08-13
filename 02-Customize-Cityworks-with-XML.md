# Section 2: Customize Cityworks with XML

## Use True and False
There are some attributes with a boolean (`true` or `false`) value that are useful when making customizations. The following examples are all done on **WOGeneral.xml**.

### Make the Work Order Cycle Panel and the Tile Number Text Box Invisible
Perhaps your organization doesn't need a particular panel or control. The following code makes the work order cycle panel invisible, and therefore, unuseable. Put the code between the `layout` tags.

```xml
<panel id="WOCycle" visible="false"></panel>
```
The following code makes the tile number text box (control) invisible. Put between `controls` tags.

```xml
<control id="txtTileNo" visible="false"></control>
```
### Collapse the Attachments Panel by Default

Sometimes a panel may only need to be opened occasionally for reference purposes or rare operations. The following code sets the attachments panel to be collapsed by default. Put between `layout` tags.

```xml
<panel id="AttachmentsPanel" collapse="true"></panel>
```
### Toggling Required Fields
By default, a number of fields are required on a work order or other work activity. Your organization may want to change what is required. The following code un-requires the Actual Finish Date calendar control. This is put between `controls` tags.

```xml
<control id="calActualFinishDate" required="false"></control>
```
To require a control that is not required by default, simply set the required attribute of the control to `true`. This is also to be put between `control` tags.

```xml
<control id="cboWorkCompletedBy" required="true"></control>
```
## Changing Labels and Titles

Your organization may have different language for the various data fields in a work activity. For example, in the UI, the Work Order ID is labeled as "Number". The following code changes the label from "Number" to "ID". Put the code between the `layout` tags.

```xml
<label id="label_cboWorkOrderId">
	<text>ID:</text>
</label>
```
We could also change the "Description" label to read "Type":

```xml
<label id="label_cboWODesc">
	<text>Type:</text>
</label>
```
Panel titles are somewhat different. The following code, between `layout` tags, changes the general panel's title from "Work Order" to "General Work Order Information:

```xml
<panel id="General">
	<panelTitle>
		<text>General Work Order Information</text>
	</panelTitle>
</panel>
```
## Move Panels and Rows

It may be beneficial at times to reorganize panels on a page or rows within a panel. There are two attributes that allow us to move panels: `moveBefore` and `moveAfter`. The following code, between `layout` tags, moves the assets panel before the general panel, and the map panel after the general panel:

```xml
<panel id="Assets" moveBefore="General"></panel>
<panel id="Map" moveAfter="General"></panel>
```
If drastic reorganization of a page is required, we can also use columns to order the panels. Note that when you are using columns to move panels around, if a panel remains in its original column, any new panels will move below it, regardless of the order they are in. In order to ensure ordering the way you want, if a panel is to remain in its original column, use the `moveBefore` or `moveAfter` attributes to force them into their proper locations. Between `layout` tags:

```xml
<column id="col1">
	<panel id="Assets"/>
	<panel id="Map"/>
	<panel id="AttachmentsPanel"/>
	<panel id="WorkActivities"/>
	<panel id="MapLayers"/>
</column>
<column id="col2">
	<panel id="Details"/>
	<panel id="WOCycle" moveAfter="Details"/>
	<panel id="SavedTasks" MoveBefore="General"/>
	<panel id="General"/>
</column>
```

In order to move rows around within a panel, you simply need to access the `index` attribute of the row you would like to move, and set the `moveTo` attribute to row index you would like to move it to. For the assets panel, to move row 5 (the buttons) to the row 2 (just after the panel title bar), the following code gets put between `layout` tags:

```xml
<panel id="Assets">
	<row index="5" moveTo="2"></row>
</panel>
```
Note that if any row takes the place of the panel title (row 1), the panel is collapsible, but cannot be re-expanded.

## Adjusting Panel Height and Width
Panels, by default, are 482 pixels wide by the required height to fit all rows. The following code, between `layout` tags, makes the assets panel a 500 pixel square using the `width` and `height` attributes:

```xml
<panel id="Assets" width="500px" height="500px"></panel>
```
## Changing Tool Tips
The following code changes the tool tip for the "get assets from map" button and is put between `controls` tags:

```xml
<button id="btnGetFromMap" toolTip="USE THIS TO ATTACH ASSETS CURRENTLY SELECTED ON THE MAP"></button>
```

## Creating a New Panel
To create a new panel, one must simply call up panel tags with an `id` that is not used by another panel. All changes in this section are done in `layout` tags.

```xml
<panel id="NewPanel" moveBefore="General" width="482px"></panel>
```
Note that no new panel appears. A panel must have a row with a control in it to display. Let's add a row with a label  in it:

```xml
<panel id="NewPanel" moveBefore="General" width="482px">
	<panelTitle>
		<text>New Panel</text>
	</panelTitle>
	<row>
		<label id="label_cboWODesc"></label>
	</row>
</panel>
```
The panel now appears, but only has a title bar and a label. Let's add a control. The process of moving a control involves the use of `controlContainer` and `linkedControls` tags:

```xml
<panel id="NewPanel" moveBefore="General" width="482px">
		<panelTitle>
			<text>New Panel</text>
		</panelTitle>
	<row>
		<label id="label_cboWODesc"></label>
		<controlContainer>
			<linkedControls>
				<control id="cboWODesc"></control>
			</linkedControls>
		</controlContainer>
	</row>
</panel>
```
## Universal Custom Fields
Universal Custom Fields (UCFs) are fields in various tables in the Cityworks database that allow you to track data not otherwise tracked by Cityworks. Enable UCFs by making them visible. Put between `controls` tags:

```xml
<control id="Text1" visible="true"></control>
<control id="Text2" visible="true"></control>
```
When any UCFs are enabled, a new panel will appear at the bottom of the second column. Additional changes can be made, such as the editing of labels in `layout` tags:

```xml
<panel id="UniversalCustomFieldsPanel" moveBefore="General">
	<label id="label_Text1">
		<text>First Field:</text>
	</label>
	<label id="label_Text2">
		<text>Second Field:</text>
	</label>
</panel>
```

## Setting a Default Tab
It may be beneficial to have a panel open on a different tab. This can easily be changed, as in the example of the Service Request intake form (**NewSRLayout.xml**). The following code changes the default tab that is open in the Additional Details panel, and is put between `layout` tags:

```xml
<tabset id="AdditionalDetails" initialTab="CallerInfo"/>
```