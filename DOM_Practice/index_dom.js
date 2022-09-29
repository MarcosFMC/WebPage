import { DarkThemeSystem} from "./dark_theme_btn.js";
import { OpenPanelSystem, ResponsivePanelSystem} from "./panel.js";
import { ScrollOpacitySystem } from "./scroll_top_btn.js";
import { ClockSystem,AlarmSystem } from "./section_1.js";
import { SearchFilterSystem } from "./section_10.js";
import { PrizeDraw } from "./section_11.js";
import { ResponsiveSliderSystem } from "./section_12.js";
import { MovementSystem, ShortcutsSystem} from "./section_2.js";
import { TimerSystem } from "./section_3.js";
import { OpenWindowSystem } from "./section_5.js";
import { DeviceDetectionSystem } from "./section_6.js";
import { ConnectDetectionSystem } from "./section_7.js";
import { CameraDetectionSystem } from "./section_8.js";
import { GeolocationSystem } from "./section_9.js";
import { ResponsiveSystem } from "./section_4.js";
import {DesktopPanel} from './scroll_spy.js';
import { IntelligentVideoSystem } from "./intelligent_video.js";
import { ValidationFormSystem } from "./validation_form.js";
import { NarratorSystem } from "./narrator.js";


const d = document;

ConnectDetectionSystem('#online','#offline');

NarratorSystem();

d.addEventListener('DOMContentLoaded',(e)=>{  

    ValidationFormSystem('#validation-form');

    IntelligentVideoSystem('#intelligent-video');

    DesktopPanel();

    ResponsivePanelSystem();

    ResponsiveSliderSystem('.slide','.previous','.next');

    PrizeDraw('#prize-list li','#prize-list-btn');

    SearchFilterSystem('.card figcaption','#filter');

    GeolocationSystem('geolocation');

    CameraDetectionSystem();

    OpenWindowSystem('responsive-form');

    ResponsiveSystem('#youtube-content'
    ,"(min-width: 650px)"
    ,'<a href="https://www.youtube.com/watch?v=qlssrqVjzw8" target="_blank" >Ver Video</a>'
    ,'<iframe width="600" height="400" src="https://www.youtube.com/embed/qlssrqVjzw8" title="TRANKA - Lauty Gram, Omar Varela (Video Oficial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

    ResponsiveSystem('#maps-content'
    ,"(min-width: 650px)"
    ,'<a href="https://www.google.com.ar/maps" target="_blank" >Ver Mapa</a>'
    ,'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25635360.755255908!2d-63.28125!3d-38.341656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1663722007190!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');

    OpenPanelSystem('.panel','.open-panel-btn','.menu a');

    ClockSystem('#clock','#start-clock','#stop-clock');

    AlarmSystem('../audios/alarma.wav','#start-alarm','#stop-alarm');

    TimerSystem('#timer','Oct 9, 2022 00:00:00','Feliz cumple Alonso!!!!!!'); 

    DeviceDetectionSystem('user-agent')

})
d.addEventListener('keydown',e =>{

    MovementSystem('#circle','#background',e);

    ShortcutsSystem(e);
})

d.addEventListener('scroll', e =>{
    ScrollOpacitySystem('.scroll-top-btn');  
})

DarkThemeSystem('.dark-theme-btn','dark-theme');



