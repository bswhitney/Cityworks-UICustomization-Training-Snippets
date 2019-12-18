## Questions Pending Research
* When flagging a field as required, is there a way to change the formatting of the field rather than just the label?
* Is there a way to set map layers to selectable in the same method as section 6 of the UI manual?
* Can you change the width of the columns on a search results page?

## Answered Questions
**Question:** Is there a way to make a long data fields into shorter fields so you can fit another control onto the same row?

**Answer:** Yes. Using the browser's developer tools, I found that there are two classes that dictate the length of the field, *normal* and *long*. The following is a simple JavaScript solution for shrinking the Description combo box on a work order page:
```JavaScript
$(function () {
document.getElementById('ctl00_Main_cboWODesc').classList.remove('long');
document.getElementById('ctl00_Main_cboWODesc').classList.add('normal');
})
```

---
**Question:** When I flag a control as required, does it actually force the user to fill that control with a value before closing it out?

**Answer:** Yes. I made two additional controls required, and it forced me to fill those in.

---
**Question:** Is there currently a way to assign XML customization folders to a group?

**Answer:** As of Cityworks 15.4, there is not. It is available at the domain and employee level.

---
**Question:** Is there a way to make fields in the UI readonly?

**Answer:** Yes. I was able to disable to Submit To field on a Work Order page using the following code:
```JavaScript
$(function () {
    document.getElementById('ctl00_Main_cboSubmitTo').setAttribute('disabled', true);
});
```

---
**Question:** Is there a way to move the attachments section of the inspection details tab to the observations tab?

**Answer:** After playing with it for a few minutes, and using the *GenInspectionEditBase.xml* file, I was able to get it to work. The following code is in a customization file called *GenInspectionEdit.xml* between the layout tags:
```xml
<tabset id="InspectionTabset">
  <tab id="InspectionTab">
    <title id="Attachments">
      <text>Attachments</text>
      <linkedControls>
        <control id="grdAttachments" />
      </linkedControls>
    </title>
    <row>
      <controlContainer type="plain">
        <linkedControls>
          <control id="grdAttachments" />
        </linkedControls>
      </controlContainer>
    </row>
  </tab>
</tabset>
```
---
**Question:** Can you change the width of the columns on a search results page?

**Answer:** Using the developers tools, I found that each of the columns was given a width. This width seems to be based on the number of columns showing—the width of the columns adjust to fit the size of the table. Using the console in the developer tools, I changed the width of the columns using the following script:

```JavaScript
$("col").css("width", "100px");
```
Note that this did not actually set the width of the columns to 100 pixels. When run, this simply evenly spaced the columns, making it a little easier to look at. This could be incorporated in a JavaScript file as follows:

```JavaScript
$(function () {
    $("col").css("width", "100px");
});
```
If a means of selecting columns by their data type, field name, or other attribute could be found, it might be possible to further manipulate column width on a case-by-case basis.

---
**Question:** On an inspection, is there a way of removing the pencil icons in the observations?

**Answer:** All pencil icons on an inspection have the class `.in-answers-edit`. In a customization file *GenInspectionEdit.xml*, I added the following JQuery between layout and script tags:

```JavaScript
$(".in-answers-edit").hide()
```

This simply selects all pencil icons using the class mentioned above, and hides them. In order to hide specific observations, you would have to find some way of querying out by the observation question.

---
**Question:** Is there a way to reorder columns in a table? For example, if I wanted to move the STATUS column in a work order related tasks table?

**Answer:** The following jQuery worked well for me. There are some things to note, however:
 * This does not change the order of the fields in the database—this is all done on the front end.
 * Even if columns are hidden, their indexes must be accounted for. Out of the box, SeqID is the first visible column, but it is actually the third column, and so has an index of 2.
 * The selector for the grid may depend on your installation. You should find it using the developer tools in your browser before using this script.

 ```JavaScript
// Variables holding column indexes (0, 1, 2, ...) for from column, new column.
let from = 5;
let to = 4;
// Variable holding the grid in question (found using developers tools).
let grid = '#ctl00_Main_ctl322_ctl00';

$(function () {
    // Move column header.
    let hText = $(`${grid}_Header thead tr`).find('th').eq(from).text();
    $(`${grid}_Header thead tr`).find('th').eq(from).remove();
    $(`${grid}_Header thead tr`).find('th').eq(to).before(`<th>${hText}</th>`);
    // Move column contents.
    $(`${grid} tr`).each(function() {
        let columnTitle = $(this).find('td').eq(from).text();
        $(this).find('td').eq(from).remove();
        $(this).find('td').eq(to).before(`<td>${columnTitle}</td>`);
    });
});
 ```

To use this, you simply need to replace the values for `from`, `to`, and `grid`. A further improvement would be to turn the script into a callable function, so you could reorder columns as needed.

