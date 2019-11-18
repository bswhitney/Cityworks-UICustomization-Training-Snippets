# Customize Cityworks with HTML and CSS
One strength of using XML for Cityworks UI Customization is the ability to inject CSS, JavaScript, and HTML. In this section we will cover the injection of CSS and HTML:

## Referencing External CSS Files
To reference external CSS files, simply use `styleSheet` tags in the `layout` tags:

```xml
<styleSheet id="CustomStyle" source="../XML/Default - Copy/WOGeneralCustom.css"></styleSheet>
```

## Basic CSS Edits to Text
It is possible to change the style of individual elements or many at once. In order to edit a single element, such as the general panel title, you must inject some HTML to give that specific element an ID to work with:	

```xml
<panel id="General">
	<panelTitle>
		<text>
			<![CDATA[
				<css id="general">Work Order</css>
			]]>
		</text>
	</panelTitle>
</panel>
```
The panel title is now ready to be given its own CSS styling. In an external CSS file, the following code will change the appearance of the panel title:

```css
#general {
	font-family: 'Courier New';
	font-size: 18px;
	font-style: italic;
	font-weight: 900;
	color: fuchsia;
}
```
Note that the `#general` selector corresponds with the `id` we gave the panel title in the XML.

If you would like to change more elements on the page, the following CSS code changes most labels and titles using the `.layout`, `.container`, and `.row` selectors. More selectors may be added to extend changes to fields and other text in the page.

```css
.layout .container .row {
	font-family: 'Courier New';
	font-size: 18px;    
	font-style: italic;
	font-weight: 900;
	color: fuchsia;
}
```
## Changing the Style for Required Fields
When a field is flagged as required, it's label, by default, is red with pink highlighting. The `.unflaggedRequired` selector can be used to change the default formatting:

```css
.unflaggedRequired {
	color: green;
	background-color: lime;
}
```
## Adding a Help Button to a Panel Title Bar
The following code adds a help button to the title bar of a panel. When clicked, the button will open the help documentation for a specific page that we specify. We are adding the button to the top of the general panel.

```xml
<panel id="General">
	<panelTitle>
		<text>
			<![CDATA[
				Work Order<a href="http://training.cityworks.com/cityworks/Help/AMS/#Work-Order/Work-Order.htm" target="blank"; style="text-decoration: none; color: white;"><img style="height: 15px; float:right; margin-top: 3px;" src="../assets/icons/info-16.png"></img></a>
			]]>
		</text>
	</panelTitle>
</panel>
```
## Working with the Background
The following CSS changes the background of the page to blue with the Cityworks logo in the bottom right corner.
```css
body {
	background-color: #005FA9;
	background-image: url(https://login.cityworksonline.com/Content/img/login.png?v=4.3.10);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: right bottom;
}
```