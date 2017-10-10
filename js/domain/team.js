// the domain banner 
// ----------------------------------

var banner = {
    title       : 'Team',
    description : 'GDC is always looking for strong students and researchers. A strong preference is given to students who have been admitted to MIT. Similarly, research assistant positions are typically filled internally by graduate students.',
    image       : 'img/data/bokeh.jpg'
};


// the domain thumbnails - use by album.js 
// ----------------------------------------
var students = [];
students.push('MITGDC_RongshaLi.jpg');
students.push('MITGDC_RobertoAceves.jpg');
students.push('MITGDC_SergioHerrero.jpg');
students.push('MITGDC_Alberto_Garcia.jpg');
students.push('MITGDC_PClay.jpg');
students.push('MITGDC_DanRobey.jpg');
students.push('MITGDC_AneFabo.jpg');
students.push('MITGDC_ZeidAlghareeb.jpg');
students.push('MITGDC_naiara.jpg');
students.push('MITGDC_FivosConstantinou.jpg');
students.push('MITGDC_IndyYu.jpg');
students.push('MITGDC_JinOng.jpg');
students.push('MITGDC_JoVenkat.jpg');
students.push('MITGDC_MariaArenas.jpg');
students.push('MITGDC_JCMurillo.jpg');
students.push('MITGDC_JokinZunzunegui.jpg');
students.push('MITGDC_KarenDavie.jpg');
students.push('MITGDC_MariosAssiotis.jpg');
students.push('MITGDC_RuktaiAcePrurapark.jpg');
students.push('MITGDC_RidaChan.jpg');
students.push('MITGDC_ChaitraChandrasekhar.jpg');
students.push('MITGDC_Ching-HueiTsou.jpg');
students.push('MITGDC_HaiNing.jpg');
students.push('MITGDC_HenryChen.jpg');
students.push('MITGDC_Ivan_Ruiz.jpg');
students.push('MITGDC_JoeFoley.jpg');
students.push('MITGDC_SangeethRam.jpg');
students.push('MITGDC_SivaramCheekiralla.jpg');
students.push('MITGDC_StefanieDelichatsios.jpg');
students.push('MITGDC_StephenGill.jpg');
students.push('MITGDC_TaeheeHan.jpg');
students.push('MITGDC_AdamSchlesinger.jpg');

var thumbnails = [];
students.forEach(function(image){
    var name = image.replace('MITGDC_','');
    name     = name.replace('.jpg','');

    // shorten if longer than 11
    if (name.length > 11) name = name.substring(0,13);

    thumbnails.push({
        description : name,
        image       : 'img/people/students/' + image
    });
});