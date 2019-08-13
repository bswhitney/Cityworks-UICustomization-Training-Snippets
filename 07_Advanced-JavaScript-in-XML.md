# Advanced JavaScript, CSS, HTML and XML
## Script Tags and External JavaScript Files
JavaScript can be very useful when customizing the Cityworks UI, allowing you to automatically fill fields, transform them, and add additional functionality to pages. One way to write JavaScript for use in XML is between `script` tags, like this:

```xml
<script>
	// Your code here.
</script>
```
The script tags need to be inserted within the `layout` tags. Another way is to write JavaScript in an external file and link that file to the XML using `script` tags, like this:

```xml
<script source="filename.js"></script>
```
Either of these methods can be used for any of these methods.

## SR Labor: Auto Calculate Time
By design, when times are entered into the Service Request Labor form (**SRLabor.xml**), hours are not calculated, and have to be manually entered. There is a function that calculated the time automatically. However, it is disabled by default. The following JavaScript enables the function:

```javascript
$(function () {enableAutoCalc = true;});
```

## Inbox: Set a Refresh Timer
Inbox data is retrieved only when the page loads. After a time, that data can be out-of-date. We can use JavaScript to force the browser to reload the page at a specific interval:

```javascript
$(function() { setTimeout(function() {location.reload(); }, 30000 )});
```
The number at the end of the function, 30000, is the number of milliseconds that the browser should wait before refreshing. This corresponds to 30 seconds. It can be changed to reflect any time.

## Inbox: Set a Marquee
An inbox marquee could be a means of disseminating information to Cityworks users in an organization. To create a marquee, we enter the following XML into **Inbox.xml**:

```xml
<label id="CustomCode" moveBefore="adminColumn" type="plain">
	<text>
	    <![CDATA[
			<marquee class="banner" behavior="scroll" direction="left">Marquee Text</marquee>
		]]>
	</text>
</label>
```
Using CSS, we can further format the marquee:

```css
.banner {
	background: #d8d8dc;
	color: #4c4c4c;
	width: 100%;
	padding: 7.5px;
	font-size: 1.25em;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	border-top: solid 2px #1975a3;
}
```
## Inbox: Make Widgets Collapsible
By default, the Inbox widgets are not collapsible. The following JavaScript changes that:

```javascript
$(function () {
	$(".widget").each(function () {
		var pParent = $(this);
		var newImage = $(this).children('h2').append('<div class="toggle tools"><img style="" type="image" src="..\\Assets\\img\\layout\\rollDown.png" /></div>');
		newImage.find("img").click(function () {
            if (pParent.children('div').is(':visible')) {newImage.find('img').prop("src", "..\\Assets\\img\\layout\\rollUp.png");}
            else {newImage.find('img').prop("src", "..\\Assets\\img\\layout\\rollDown.png");}
            pParent.children('div').toggle();
		});
	});
});
```
This applies to all widgets. Further work could be done to make a single widget collapsible.

## SR Intake: Auto-Fill Text Fields
When creating a service request, it might be useful to already have certain data filled in, especially when all requests should be within a singe city's boundaries, or within a single state. The following JavaScript automatically fills the Problem City and Problem State text fields:

```javascript
$(function () {
	// Select the problem city text box.
	var element = $("#ctl00_Main_txtProbCity");
	// Check to see if the element's value is null.
	if (element.val() === "") {
		// If the element's value is null, replace the null value.
		element.val("Sierra Vista");
	}
});

$(function () {
	// Select the problem state text box.
	var element = $("#ctl00_Main_txtProbState");
	// Check to see if the element's value is null.
	if (element.val() === "") {
        // If the element's value is null, replace the null value.
        element.val("AZ");
	}
});
```

## SR Intake: Transform Text Field into Drop Down
If you are working in a specific city, like Sierra Vista, AZ, it's likely that the ZIP code can only be one of a set of values. The following JavaScript takes the Problem ZIP code field and turns it into a drop down menu:

```javascript
$.fn.convertToDropdown = function (options) {
	return this.each(function () {
		var element = $(this);
		var transform = function (element) {
			var id = element.attr("id");
			var name = element.attr("name");
			var value = element.val();
			if (id && name) {
				var html = "<select id='" + id + "' name='" + name + "' class='normal'>";
				for (var i = 0; i < options.length; i++) {
					if (options[i] === value) {
						html += "<option value='" + options[i] + "' selected='true'>" + options[i] + "</option>";
                    } else {
						html += "<option value='" + options[i] + "'>" + options[i] + "</option>";
					}
				}
				html += "</select>";
				element.replaceWith(html);
			}
		};
		transform(element);
		if (typeof Sys != 'undefined') {
			var prm = Sys.Webforms.PageRequestManager.getInstance();
			prm.add_endRequest(function () {
				transform(element);
			});
		}
	});
};

$(function () {
    $("#ctl00_Main_txtProbZip").convertToDropdown(["85613", "85635", "85650", "85615"]);
});
```