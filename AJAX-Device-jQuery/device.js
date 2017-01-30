$(document).ready(function() {
	

	$.ajax({
		url: "DeviceSample.xml",
		crossDomain: true,
		dataType: 'xml',
		type: 'GET',
		success: function(xmlDoc) {
			var is = $.isXMLDoc(xmlDoc);
			console.log("xhrRequest: Success; isXMLDoc: " + is);
			
			
			
			var manufacturers = xmlDoc.getElementsByTagName("manufacturer");
			var manuText = [];
			var manuSelect;
			var models = xmlDoc.getElementsByTagName("model");
			var modelText = [];
			var modelSelect;
			
			
			var properties = xmlDoc.getElementsByTagName("properties");
			var property = [];
			var propText = [];
		
			
			//Enable select manufacturers
			$.each(manufacturers, function(i, manufacturer) {
				manuText[i] = manufacturer.childNodes[0].nodeValue;				
			});
			
			manuText = $.uniqueSort(manuText).sort();
			$.each(manuText, function(i) {
				var manuOption = '<option value=' + manuText[i] + '>' + manuText[i] + '</option>';
				$("#selectManufacturer").append(manuOption);
			});
			
			//Enable select models
			$('#selectManufacturer').change(function() {
				manuSelect = $('#selectManufacturer option:selected').text();
				$("#selectModel").empty();
				$("#selectModel").append('<option value="">Select a model</option>');
				var j = 0;
				$.each(manufacturers, function(i, manufacturer) {
					
					manuText[i] = manufacturer.childNodes[0].nodeValue;
					if(manuSelect == manuText[i]) {
						//Change models according to manufacturer
						modelText[j] = manufacturer.parentNode.getElementsByTagName("model")[0].childNodes[0].nodeValue;
						var modelOption = '<option value=' + modelText[j] + '>' + modelText[j] + '</option>';
						$("#selectModel").append(modelOption);
						j++;
						}				
				});
					
			});
			
			//Enable searching
			$('form').submit(function(evt) {
				evt.preventDefault();
				var $selectField = $('form select');
				var $searchButton = $('form button');
				
				$selectField.prop("disabled", true);
				$searchButton.attr("disabled", true).text("Searching....");
				
				manuSelect = $('#selectManufacturer option:selected').text();
				modelSelect = $('#selectModel option:selected').text();
				var j = 0;
				$.each(manufacturers, function(i, manufacturer) {
					manuText[i] = manufacturer.childNodes[0].nodeValue;
					modelText[i] = models[i].childNodes[0].nodeValue;
					if((manuSelect == manuText[i]) && (modelSelect == modelText[i])) {
						property = properties[i].getElementsByTagName("property");
						$.each(property, function(k, prop) {
							var info;
							info = prop.getAttributeNode("name").nodeValue;
							if(prop.getAttributeNode("value")) {
								info += ": " + prop.getAttributeNode("value").nodeValue;
							}
							
							$('#prop p').append(info + "; ");
						})
						//$('#prop p').append(property + "; ");
					}
				});
				
				$selectField.prop("disabled", false);
				$searchButton.attr("disabled", false).text("Search");
				
				
				
				
				
				
			});		

		
			
		}
	});
	


	
 

		

	
	
});