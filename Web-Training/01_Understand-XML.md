# UI Customization for Cityworks 15.4
**Note:** The content of this markdown file are similar to the PowerPoint presentation of the same name within this repository.

## Course Objectives
* Introduce basic XML layout and structure.
* Explain best practices in Cityworks UI Customization.
* Demonstrate simple XML-based customizations.
* Demonstrate injection of HTML, CSS, and JavaScript into XML.

## Extensible Markup Language (XML)
* Uses tags and elements to structure, manipulate, and describe data (like HTML).
* Used in Cityworks to generate HTML (Layout Manager). Benefits:
  * Very shallow learning curve
  * Easy to interface with HTML, CSS, and JavaScript.
  * Customizations are simple and immediate.

## XML Terminology
* **Tag:** The beginning or ending of an element, enclosed in angle brackets: `<` and `>`. A closing tag will be enclosed as follows: `</` and `>`.
* **Element:** Everything between matching tags. For example, a panel element will consist of everything between `<panel>` and `</panel>`. Each element typically corresponds with an item on the page.
* **Markup:** String between tags to format elements.
* **Content:** String between tags that is not markup.
* **Attribute:** Strings within tags to modify certain features of an element. Consider the following label: `<panel id='General' collapse='true'></panel>`. The `id` attribute identifies which panel is being mentioned specifically, while the `collapse` attribute alters the behavior of the panel.

## XML File Structure in Cityworks

```xml
<?xml version='1.0' encoding='utf-8'>
<webLayout xlmns='http://azteca.com/cityworks/layout/webLayout'>
  <controls></controls>
  <layout></layout>
  <messages></messages>
</webLayout>
```
* The first line is the XML declaration, with which all XML files **must** begin.
* The second line flags the file as a Cityworks XML file, and points it to the layout manager.
* The controls element will contain all edits to the controls.
* The layout element will contain all edits to the layout.
* The messages element will contain all edits to the messages.

## Controls
* Section used to define and configure control elements, which include buttons, grids, text boxes, drop-downs, calendars, check boxes, and radio buttons.
* Cityworks Layout Manager follows a naming convention for control IDs, depending on the type of control:
  * 'cbo_____' for drop-downs. Example: 'cboWODesc'
  * 'cal_____' for calendars. Example: 'calActualFinishDate'
  * 'grd_____' for grids.
  * 'chk_____' for check boxes.
  * 'txt_____' for text boxes.
  * 'btn_____' for buttons.
* The tags for these controls will differ depending on the control type:
  * `<grid></grid>` for grids,
  * `<button></button>` for buttons, and
  * `<control></control>` for everything else

## Layout
* The Layout section arranges elements on the page.
* Each page is divided into colums, rows, and panels.
  * 3 panels per page.
  * Unlimited number of panels per column.
  * Unlimited number of rows per panel.
* In order for a panel to display, it must have at least one row with content (label, control).
* Columns and panels have IDs, while rows have indices.

## Messages 
* The message section is used primarily for pop-up message customization, especially for internationalization.

## Layout Manager (LM)
* LM is a GUI-rendering engine responsible for about 90% of Cityworks UI.
* It can only be interacted with through customization files.
* When a page is loaded, LM dynamically loads the page each time. This makes changes immediate.
* LM's Process:
  1. Read the Base XML file and generate HTML.
  2. Read Custom XML file and edit the HTML.
  3. Send HTML to the browser for display.

## Locating XML Files
* XML files are located in the install directory:
  * C:/inetpub/wwwroot/*site_name*/Website/XML
* Base files have "base" in the name (example: WOGeneralBase.xml), and should not be edited directly.
* Non-base files are located in folders in the XML folder. They can be created, modified, and deleted.
* Best practices dictate that copies of all files to be edited be backed up before editing, just in case.

## Editing the XML
* Any text editor can do it, meaning even Notepad.
* Text editors with Intellisense are recommended:
  * Visual Studio / Visual Studio Code
  * Notepad++
  * Atom
  * Dozens more