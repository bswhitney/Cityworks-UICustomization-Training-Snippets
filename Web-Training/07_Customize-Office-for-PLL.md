# Customize Office for PLL
## Note about using XML to customize the UI in PLL
Many of the principles used in customizing the AMS UI extend to PLL. The primary difference is that one page can have multiple XML documents associated with it—PLL pages are divided into **Add**, **Edit**, and **View** XML files. For example, when dealing with violations, there is a way of adding violations, editing violations, and viewing violations. These can be edited by making customization files for **AddCUFViolationBase.xml**, **EditCUFViolationsBase.xml**, and **ViewCUFViolationsBase.xml**, respectively. Element naming conventions are not always followed in PLL.

## Change the Add Panel Title
To change the panel title on the add violation panel, add the following code between layout tags in the **AddCUFViolations.xml** file:

```xml
<panel id="div_SEAddViolations">
	<panelTitle>
		<text>VIOLATIONS</text>
	</panelTitle>
</panel>
```

## Make a Control Required on the Add Panel
To make the violation type control required on the add violation panel, add the following code between control tags in the **AddCUFViolations.xml** file:

```xml
<control id="txtViolationType" required="true"></control>
```

## Change a label on the Edit Panel
To change the Date Completed label on the edit violation panel, add the following code between layout tags in the **EditCUFViolations.xml** file:

```xml
<label id="label_dpDateCompleted">
	<text>Completed On:</text>
</label>
```

## Change the Visibility of a Control on the View Panel
To hide the Date Issued field on the view violation panel, add the following code between control tags in the **ViewCUFViolations.xml** file:

```xml
<control id="lblDateIssued" visible="false></control>
```
