var js_mes; 

function vericames() {

    js_mes=parseInt(document.formcalend.f_mes.value);

    switch (js_mes){
        case 1: document.formcalend.f_nomemes.value = 'Janeiro'; break;
        case 2: document.formcalend.f_nomemes.value = 'Fevereiro'; break;
        case 3: document.formcalend.f_nomemes.value = 'Marco'; break;
        case 4: document.formcalend.f_nomemes.value = 'Abril'; break;
        case 5: document.formcalend.f_nomemes.value = 'Maio'; break;
        case 6: document.formcalend.f_nomemes.value = 'Junho'; break;
        case 7: document.formcalend.f_nomemes.value = 'Julho'; break;
        case 8: document.formcalend.f_nomemes.value = 'Agosto'; break;
        case 9: document.formcalend.f_nomemes.value = 'Setembro'; break;
        case 10: document.formcalend.f_nomemes.value = 'Outubro'; break;
        case 11: document.formcalend.f_nomemes.value = 'Novembro'; break;
        case 12: document.formcalend.f_nomemes.value = 'Dezembro'; break;
        default: document.formcalend.f_nomemes.value = '** M\u00eas Inv\u00e1lindo! **'; break;
    }
}
        