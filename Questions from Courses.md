## Questions Pending Research
**Question:** Is there a way to move the attachments section of the inspection details tab to the observations tab?


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
