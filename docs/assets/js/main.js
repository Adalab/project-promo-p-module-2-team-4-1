"use strict";const designLegend=document.querySelector(".js_designLegend"),design=document.querySelector(".js_design"),arrowDesign=document.querySelector(".js_arrowDesign"),fillLegend=document.querySelector(".js_fillLegend"),fill=document.querySelector(".js_fill"),arrowFill=document.querySelector(".js_arrowFill"),shareLegend=document.querySelector(".js_shareLegend"),share=document.querySelector(".js_share"),arrowShare=document.querySelector(".js_arrowShare"),radioButton1=document.querySelector(".js_radio-1"),radioButton2=document.querySelector(".js_radio-2"),radioButton3=document.querySelector(".js_radio-3"),previewContainerCard=document.querySelector(".js_preview");function handleClickRadio1(e){previewContainerCard.classList.remove("palette-2"),previewContainerCard.classList.remove("palette-3"),previewContainerCard.classList.add("palette-1")}function handleClickRadio2(e){previewContainerCard.classList.remove("palette-1"),previewContainerCard.classList.remove("palette-3"),previewContainerCard.classList.add("palette-2")}function handleClickRadio3(e){previewContainerCard.classList.remove("palette-1"),previewContainerCard.classList.remove("palette-2"),previewContainerCard.classList.add("palette-3")}function unfoldForm(e){"designLegend"===e&&(design.classList.toggle("collapsed"),fill.classList.add("collapsed"),share.classList.add("collapsed")),"fillLegend"===e&&(design.classList.add("collapsed"),fill.classList.toggle("collapsed"),share.classList.add("collapsed")),"shareLegend"===e&&(design.classList.add("collapsed"),fill.classList.add("collapsed"),share.classList.toggle("collapsed"))}function rotateArrow(e){"designLegend"===e&&(arrowDesign.classList.toggle("rotate"),arrowFill.classList.add("rotate"),arrowShare.classList.add("rotate")),"fillLegend"===e&&(arrowDesign.classList.add("rotate"),arrowFill.classList.toggle("rotate"),arrowShare.classList.add("rotate")),"shareLegend"===e&&(arrowDesign.classList.add("rotate"),arrowFill.classList.add("rotate"),arrowShare.classList.toggle("rotate"))}function handleCollapsed(e){e.preventDefault();const a=e.currentTarget.id;unfoldForm(a),rotateArrow(a)}radioButton1.addEventListener("click",handleClickRadio1),radioButton2.addEventListener("click",handleClickRadio2),radioButton3.addEventListener("click",handleClickRadio3),designLegend.addEventListener("click",handleCollapsed),fillLegend.addEventListener("click",handleCollapsed),shareLegend.addEventListener("click",handleCollapsed);const data={palette:1,name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:""},cardName=document.querySelector(".js_cardName"),cardJob=document.querySelector(".js_cardJob"),cardPhone=document.querySelector(".js_cardPhone"),cardEmail=document.querySelector(".js_cardEmail"),cardLinkedin=document.querySelector(".js_cardLinkedin"),cardGithub=document.querySelector(".js_cardGithub");function renderPreview(){const e=data.github.slice(1);""===data.name?cardName.innerHTML="Nombre Apellidos":cardName.innerHTML=data.name,""===data.job?cardJob.innerHTML="Front-end developer":cardJob.innerHTML=data.job,""===data.phone?cardPhone.href="":cardPhone.href="tel: "+data.phone,""===data.email?cardEmail.href="":cardEmail.href="mailto: "+data.email,""===data.linkedin?cardLinkedin.href="":cardLinkedin.href="https://www."+data.linkedin,""===data.github?cardGithub.href="":cardGithub.href="https://github.com/"+e}function handleKeyupInputs(e){const a=e.target;"name"===a.id?data.name=a.value:"job"===a.id?data.job=a.value:"email"===a.id?data.email=a.value:"phone"===a.id?data.phone=a.value:"linkedin"===a.id?data.linkedin=a.value:"github"===a.id&&(data.github=a.value),renderPreview()}fill.addEventListener("keyup",handleKeyupInputs);const buttonCreateCard=document.querySelector(".js_buttonCreateCard"),containerDone=document.querySelector(".js_containerDone");function createCard(){buttonCreateCard.classList.add("buttonCreateCard--sent"),containerDone.classList.remove("collapsed")}function handleClickButtonCreateCard(e){e.preventDefault(),createCard()}buttonCreateCard.addEventListener("click",handleClickButtonCreateCard);const form=document.querySelector(".js_form"),resetButton=document.querySelector(".js_reset");function resetCardFields(){cardName.innerHTML="Nombre Apellidos",cardJob.innerHTML="Front-end developer",cardPhone.href="",cardEmail.href="",cardLinkedin.href="",cardGithub.href=""}function resetCreateCard(){buttonCreateCard.classList.remove("buttonCreateCard--sent"),containerDone.classList.add("collapsed")}function resetPalettes(){previewContainerCard.classList.add("palette-1"),previewContainerCard.classList.remove("palette-2"),previewContainerCard.classList.remove("palette-3")}function handleClickButtonReset(){form.reset(),resetCardFields(),resetCreateCard(),resetPalettes()}resetButton.addEventListener("click",handleClickButtonReset);