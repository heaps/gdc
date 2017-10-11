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
students.push('img/people/AbelSanchez.jpg');
students.push('img/people/JohnWilliams.jpg');
students.push('img/people/BruceJones.jpg');
students.push('img/people/IsabellaVoelkl.jpg');
students.push('img/people/KaiPan.jpg');
students.push('img/people/AnujBheda.jpg');
students.push('img/people/DavidWhyte.jpg');
students.push('img/people/FabianSpreng.jpg');
students.push('img/people/NadiaMegallon.jpg');
students.push('img/people/RanjanPramanik.jpg');
students.push('img/people/SamRaymond.jpg');
students.push('img/people/SeonkyooYoon.jpg');
students.push('img/people/LindaGong.jpg');
students.push('img/people/BotongMa.jpg');
students.push('img/people/CarlosCaldera.jpg');
students.push('img/people/RobertRamirez.jpg');
students.push('img/people/GregFalco.jpg');
students.push('img/people/students/MITGDC_RongshaLi.jpg');
students.push('img/people/students/MITGDC_RobertoAceves.jpg');
students.push('img/people/students/MITGDC_SergioHerrero.jpg');
students.push('img/people/students/MITGDC_AlbertoGarcia.jpg');
students.push('img/people/students/MITGDC_PClay.jpg');
students.push('img/people/students/MITGDC_DanRobey.jpg');
students.push('img/people/students/MITGDC_AneFabo.jpg');
students.push('img/people/students/MITGDC_ZeidAlghareeb.jpg');
students.push('img/people/students/MITGDC_naiara.jpg');
students.push('img/people/students/MITGDC_FivosConstantinou.jpg');
students.push('img/people/students/MITGDC_IndyYu.jpg');
students.push('img/people/students/MITGDC_JinOng.jpg');
students.push('img/people/students/MITGDC_JoVenkat.jpg');
students.push('img/people/students/MITGDC_MariaArenas.jpg');
students.push('img/people/students/MITGDC_JCMurillo.jpg');
students.push('img/people/students/MITGDC_JokinZunzunegui.jpg');
students.push('img/people/students/MITGDC_KarenDavie.jpg');
students.push('img/people/students/MITGDC_MariosAssiotis.jpg');
students.push('img/people/students/MITGDC_RuktaiAcePrurapark.jpg');
students.push('img/people/students/MITGDC_RidaChan.jpg');
students.push('img/people/students/MITGDC_ChaitraChandrasekhar.jpg');
students.push('img/people/students/MITGDC_Ching-HueiTsou.jpg');
students.push('img/people/students/MITGDC_HaiNing.jpg');
students.push('img/people/students/MITGDC_HenryChen.jpg');
students.push('img/people/students/MITGDC_Ivan_Ruiz.jpg');
students.push('img/people/students/MITGDC_JoeFoley.jpg');
students.push('img/people/students/MITGDC_SangeethRam.jpg');
students.push('img/people/students/MITGDC_SivaramCheekiralla.jpg');
students.push('img/people/students/MITGDC_StefanieDelichatsios.jpg');
students.push('img/people/students/MITGDC_StephenGill.jpg');
students.push('img/people/students/MITGDC_TaeheeHan.jpg');
students.push('img/people/students/MITGDC_AdamSchlesinger.jpg');

var thumbnails = [];
students.forEach(function(image){
    var name = image.replace('img/people/students/MITGDC_','');
    name     = name.replace('img/people/','');    
    name     = name.replace('.jpg','');

    // shorten if longer than 11
    if (name.length > 11) name = name.substring(0,13);

    thumbnails.push({
        description : name,
        image       : image
    });
});