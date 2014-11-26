jQuery(document).ready(function(){
				try {
					var cal = $.parseIcs("calendar.ics");
 
					// show the the description of the first event
					console.log(cal.event[0].description[0].value);
				} catch (err) {
					alert(err);
				}
				console.log(cal);
			});