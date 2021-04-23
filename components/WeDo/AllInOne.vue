<template>
<div>
    <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/mob.jpeg')" alt="">
        <br>
        <h2>RAZMISLI!</h2>
        <div class=text_line></div>
        <br>
        <p class="text">Trenutno <span class="bold_text">best way da brzo naučiš i brzo zaradiš na pravi</span> i dostojan način je rad gde ?</h3>
        <p class="text">Jedna reč, dva slova- <span class="bold_text">IT</span>.</p>
        <br>
        <p class="text">Nijedan programer koji radi u IT svetu nije zabrinut za svoju budućnost, ponovićemo, <span class="bold_text">NIJEDAN</span>. A kakva je situacija kod tebe ?</p>
        <br>
        <p class="text">Skuvaj kafu, osami se negde. Izađi u prirodu, negde u šumu ili pored nekog jezera, reke. Idi na neko mesto gde možeš da čuješ samo svoje misli. Ugasi svoj raspali telefon, opusti se i <span class="bold_text">razmisli</span>.</p>
        
        
        <!-- <div class="readmore" @click="changeShow(true)">
            <span>Read more</span>
            <div class="line"></div>
        </div> -->
        <transition name="slide">
            <div class="extend" v-if="true">
                <p class="bold_text">Koji su trenutno tvoji kratkoročni izazovi</p>
                <ul>
                    <li>Roditelji se muče da ti pomognu da platiš studije</li>
                    <li class="text">Nikada dovoljno novca da platiš račune</li>
                    <li class="text">Uvek fali za izlaske i zezanje</li>
                    <li class="text">Motivacija nula bodova</li>
                    <li class="text">Još ti samo devojka fali na sve ovo.. </li>
                    <li class="text">A more... 90% da idemo, a 100 % da ne idemo</li>
                </ul>
                <!-- <div class="mobile">
                    <h3>AI1</h3>
                    <p>Contact us <br> about this service</p>
                    <a href="mailto:office@wiequee.com?subject=WQ - All in one development service" @click="sendMail">Mail us</a>
                </div> -->
            </div>
        </transition>
          <transition name="slide">
            <div class="extend" v-if="true">
                <p class="bold_text">Koji su tvoji dugoročni izazovi</p>
                <ul>
                    <li>Treba upasti u onih 5% ljudi koji će kvalitetno živeti od svog faxa</li>
                    <li class="text">A šta je sa ostalim životnim izazovima? Čime se baviti i od čega ziveti ? <span class="bold_text"> razmisli</span>.</li>
                    <li class="text">Kako zaraditi za sebe i za svoju porodicu ?</li>
                    <li class="text"> Kako uzvratiti svom roditelju koji se odrekao sebe i svojih potreba da bi se studiralo ? </li>
                    <li class="text">Kako osnovati porodicu i imati svoju decu pa posle i njih školovati ? </li>
                    <li class="text">Kako ići svake godine na more i zimi na skijanje ?</li>
                    <li class="text">Kako imati dobar auto ?</li>
                    <li class="text">Kako kupiti stan ili kuću ?</li>
                    <li class="text">Kako imati i vremena za sebe, svoj hobi, zdrav život ?</li>
                </ul>
                <p class="bold_text">KAKO!!!   RAZMISLI... </p>
                <img :src="require('@/assets/mob.jpeg')" alt="">
                <p class="bold_text">I ŠTA SADA ?</p>
                <div class="text_line"></div>
                <ul>
                    <li class="text">Sada u svom raspalom telefonu otvori notes
                  u koji ćeš upisati odgovore na sva ova pitanja ali
                  da su onakvi kakvi bi želeo da budu pa i jače od toga.</li>
                    <li class="text">Daj sebi 5 godina da ih ostvariš.</li>
                    <li class="text">Daj sebi reč da će sve tvoje dugoročne odluke
                      biti u skladu samo sa ovim ciljem.</li>
                    <li class="text">Jednom nedeljno pogledaj ponovo svoj cilj
                      a svaki dan uradi jedan mali korak ka njemu
                    i promeniće se procenti u <span class="bold_text">100% da hoće</span>...</li>
                </ul>
               
                  
                <!-- <div class="mobile">
                    <h3>AI1</h3>
                    <p>Contact us <br> about this service</p>
                    <a href="mailto:office@wiequee.com?subject=WQ - All in one development service" @click="sendMail">Mail us</a>
                </div> -->
            </div>
        </transition>
        <!-- <div class="info">
            <h3>AI1</h3>
            <p>Contact us <br> about this service</p>
            <a href="mailto:office@wiequee.com?subject=WQ - All in one development service" @click="sendMail">Mail us</a>
        </div> -->
      </div >
      <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/fe.jpeg')" alt="">
        <br>
        <p class="text bold_text">EVO JEDNOG OD NAČINA DA SE NEŠTO PROMENI? </p>
        
        <div class="text_line"></div>
        <br>
        <p class="text">IT svet je jedna od najbrže rastućih industrija današnjice. 
          Kada si u IT-u generalno si na sigurnom putu za uspešan život u Srbiji, ali i inostranstvu.</p>
        <p class="text">Prema izveštaju Svetskog investicionog foruma biznis andjela (WBAF) srpski IT sektor svrstan 
          je među "top 3" u svetu, ali uz manjak programera sa iskustvom.</p>
        <p class="text">Oni koji već rade imaju posla preko glave. Neko radi za sebe, neko za domaće, a neko za strane kompanije.
        Jedno je sigurno- ubijaju se od posla, a naravno i <span class="bold_text">dobro zarađuju</span>. </p>
        <p class="text bold_text">IT sektor drugačije zovu Sektor 21. </p>
        <p class="text">Pun je poslova koji su proglašeni za zanimanja 21. veka, odatle i ta fraza. Svako normalan teži nekoj 
          životnoj sigurnosti, a ona se najbolje stiče kroz posao, zato je IT sektor trenutno najbolja opcija za budućnost.</p>
        <p class="text bold_text">Donosi i mnoštvo prilika.</p>
        <p class="text">Poslovnih, ali i duštvenih. U ovoj industriji međuljudska komunikacija je jako bitna, ovde svako svakome pomaže. 
          Učestvovanje u humanitarnim akcijama, raznim izletima u prirodi, team building dešavanja doneće ti nova poznanstva
           i prijateljstva.</p>
    </div >
     <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/fe.jpeg')" alt="">
        <br>
        <p class="text bold_text">NEMA NESIGURNOSTI NEMA OGRANIČENJA </p>
        
        <div class="text_line"></div>
        <br>
        <p class="text">Ono što ti otvara ova vrata je <span class="bold_text">znanje</span>. Jednom kada ti se otvore vrata 
        pred tobom je svet prepun mogućnosti za zaradu, uspeh, kvalitetan život kakav želiš. Čak i na samom 
          početku imaš mogućnost za <span class="bold_text">zaradu iznad proseka</span>.</p>
        <p class="text"><span class="bold_text">Nemaš ograničenja jer možeš da radiš i na Maldivima ako želiš, tvoj laptop 
          je tvoje oruđe za rad.</span> Imaš svoj biznis za pasivne prihode, aktivne možeš da stvaraš radom 
          za domace ili strane kompanije.</p>
        <p class="text">Ili obrnuto, jer sve ustvari zavisi od tebe.</p>
        <p class="text"><span class="bold_text">Ne pronalaziš se na upisanom fakultetu ili radiš posao koji ne voliš?</span></p>
        <p class="text">Odlično, gledaš tačno gde treba. IT poslovi su najbolje rešenje.</p>
        <p class="text"><span class="bold_text">Brine te kako ćeš pronaći posao ?</span></p>
        <p class="text">Ne treba. Svi traže programere jer ova industrija toliko brzo raste da 
          prevazilazi ljudske sposobnosti. Trenutno sve kompanije traže programere koje imaju iskustva 
          i žive projekte u portfoliju.</p>
        <p class="text">Mnogi programeri trenutno rade i za dve kompanije paralelno- ako su domaće onda
           je prosek zarade oko <span class="bold_text">1 200 e</span>, dok se za rad za strane kompanije 
           plate krecu od <span class="bold_text">1 800 do 5 000 e</span>
            zavisno od stepena znanja i iskustva.</p>
        <p class="text">Uvek imate mogucnosti i za pasivne prihode, na primer da imate svoj 
          <span class="bold_text">dropshiping</span> sajt
           u USA ili Evropi ili sada jako aktuelni <span class="bold_text">afiliate marketing</span>.</p>
        <p class="text">Ovi biznisi <span class="bold_text">zaradjuju dok spavaš, a njih učimo u stepu 3, samo da znaš. :) </span></p>
        <p class="text bold_text">SADA možemo da vidimo i KAKO...</p>

         <div class="card" @mouseleave="changeShow(false)" id="AI1">
          <img :src="require('@/assets/fe.jpeg')" alt="">
          <br>
          <p class="text bold_text">A EVO I KAKO DA TO URADIMO</p>
          <div class="text_line"></div>
          <br>
          <p class="text">Sastavili smo na jedno mesto tim IT-evaca i osmislili <span class="bold_text">sistem za učenje programiranja</span>
          na kom za kratko 
            vreme možeš sa lakoćom da naučiš sve što ti je potrebno, bez ikakvog prethodnog znanja. 
            <span class="bold_text">Beginner friendly sistem.</span></p>
          <p class="text">Ko može bolje da te razume od nekoga ko je prošao kroz isto to, zar ne ?</p>
          <p class="text">Vođeni ovim konceptom napravili smo platformu za učenje programiranja tako da i vi i mi budemo na kraju
            zadovoljni <span class="bold_text">znanjem koje stičete kroz rad i vežbanje na pravim realnim projektima od kojih 
              zarađujete i koji su vam put posut zlatnim zvezdicama za dalji napredak kada vam se nađu u portfoliju.</span>.</p>
          <p class="text">Koliko puta ste videli razne kurseve koji su sastavljeni od gomile teksta koji ne razumete, teorije koja 
          ne donosi znanja u praksi jer niste imali gde ni da pokušate da radite, a kamoli da vas neko<span class="bold_text"> mentoriše?</span></p>
          <p class="text">Ili ste guglali, istraživali, gledali videe koji vam pune glavu mnoštvom informacija sa kojima ne znate opet 
          ništa i samo vas zbunjuju?</p>
          <p class="text">Upravo zbog metode<span class="bold_text"> mentor-materijal-praksa učenja, naš novi koncept</span>
          je novina u celoj IT zajednici. Ako pokažeš znanje na testovima i u radu na pravim projekatima, dobijaš i ponudu za 
          <span class="bold_text"> posao...</span></p>
          <br>
          <p class="text"><span class="bold_text">Zvuči previše dobro? </span></p>
          <p class="text"><span class="bold_text">Tek ćeš se uveriti u to! </span></p>
         </div >
    </div >
    <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/fe.jpeg')" alt="">
        <br>
        <p class="text bold_text">PITAŠ SE, PITAŠ SE... </p>
        <div class="text_line"></div>
        <br>
        <p class="text bold_text">Pitaš se koliko vremena treba ?</p>
        <p class="text">Samo od tvog truda i rada zavisi.  Ako se dobro organizujemo 
          svi imamo <span class="bold_text">sat vremena do tri sata dnevno</span> da izdvojimo za znanje koje će 
          nam doneti život kakav želimo.</p>
        <p class="text">Toliko vremena provedenog u učenju je sasvim dovoljno da za kratak period naučiš sve što ti 
          je potrebno jer smo se potrudili da svaka lekcija sadrži jasne principe rada, bez preopširnih informacija 
          koje samo zbunjuju.</p>
        <p class="text">Toliko efektivnog učenja dnevno ti je potrebno za jako brz napredak. 
          <span class="bold_text">Minimum sat.</span></p>
        <p class="text bold_text">Pitaš se da li će biti teško ?</p>
        <p class="text">Ne, jer mi znamo koja znanja su ti stvarno potrebna. Pojednostavili smo  
          ti toliko da sve razumeš jer imaš zanimljiv materijal za učenje, a opet za sve što ti možda
           ne bude jasno imaš mentora kom je stvarno bitno da shvatiš jer njegov si mentorski program, 
           a niko ne voli loše programe.</p>
        <p class="text bold_text">Ma, naučiću sve sam kad je tako lako...</p>
        <p class="text"><span class="bold_text">Nećeš</span>. Kada učiš sam ne izdvajaš dovoljno vremena, ne znaš odakle da počneš ni šta radiš,
           u jednom trenutku postaće ti naporno jer vidiš da ti ne ide samostalno.</p>
        <p class="text"> Rešili smo ti i taj problem tako što smo sadržaj koji će ti držati pažnju podelili na vise 
          koraka da bi i ti sam mogao da vidiš svoj napredak.</p>
        <p class="text"><span class="bold_text">Kod po kod -  program</span>. I dok shvatiš šta se dešava već si programer spreman za rad, zaradu 
          i skroz neverovatan novi svet u kom napokon osećaš sigurnost. </p>
        <p class="text bold_text">Veruj nam, <span class="bold_text">MI</span> to odlično znamo.</p>
    </div >
     <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/mob.jpeg')" alt="">
        <br>
        <h2>WORK FLOW</h2>
        <div class=text_line></div>
        <br>
        <p class="text">Ako očekuješ video predavanje u kom je tvoje da samo slušaš, ovaj koncept nije za tebe.</p>
        <p class="text">Mi volimo rad i primenu znanja jer odlično znamo da se samo na taj način postaje uspešan.</p>
        <p class="text">Ova platforma je tako i osmišljena- učite, ali i proveravate svoje znanje, a mi kroz različite 
          korake učenja pratimo tvoj napredak.</p>
        <!-- <div class="readmore" @click="changeShow(true)">
            <span>Read more</span>
            <div class="line"></div>
        </div> -->
        <transition name="slide">
            <div class="extend" v-if="true">
                <p class="bold_text">Šta mi očekujemo od tebe..</p>
                <ul>
                    <li>da stvarno želiš da naučiš programiranje</li>
                    <li class="text">da se zalažeš za svoje znanje</li>
                    <li class="text">da nam slobodno predstaviš svaku svoju ideju</li>
                    <li class="text">da nam ukažeš na svoje talente da možemo da napravimo plan za tebe i tvoju budućnost</li>
                    <li class="text">da stvarno odvojiš vreme za učenje</li>
                    <li class="text">da se pred učenje skoncentrišeš i ozbiljno pristupiš učenju jer bleja na društvenim
                       mrežama i jutjubu nije učenje </li>
                    <li class="text">da imaš ambicije ka uspehu u učenju i napredovanju</li>
                    <li class="text">da umeš da saslušaš i prihvatiš kritiku</li>
                    <li class="text">da se potrudiš da razumeš gde grešiš i naučiš kako te greške da ispraviš</li>
                    <li class="text">da budeš timski igrač kada upadneš u neki tim</li>
                    <li class="text">da nas ne ogovaraš po društvenim mrežama, jer ti si član zajednice i kluba 
                      koji to neće tolerisati</li>
                    <li class="text">da praviš velike planove ali da se krećeš malim koracima</li>
        
                </ul>
                <p class="bold_text">Da li možeš sve ovo ? Naravno da da. Mi smo tu i da te motivišemo 
                  ako i kada postane teško..</p>

                <!-- <div class="mobile">
                    <h3>AI1</h3>
                    <p>Contact us <br> about this service</p>
                    <a href="mailto:office@wiequee.com?subject=WQ - All in one development service" @click="sendMail">Mail us</a>
                </div> -->
            </div>
        </transition>
          <transition name="slide">
            <div class="extend" v-if="true">
                <p class="bold_text">Šta ti možeš da očekuješ od nas?</p>
                <ul>
                    <li>Napredak studenta prati se kroz mentorstvo, zanimljive teorijske i praktične testove i vežbe, 
                      kvizove znanja ali i kroz razne druge vidove takmičenja.</li>
                    <li class="text">Na samoj platformi postoji posebna forma sa lekcijama kao i forma za pitanja i
                       odgovore u kojoj su svi mentori.</li>
                    <li class="text">U svakom trenutku je tu neko za odgovor, pomoć ili savet jer želimo da sastavimo
                       pravu malu zajednicu programera koja se međusobno razume i pomaže.</li>
                    <li class="text">Verujemo da se tako gradi i međusobna zdrava konkurencija i da te to vuče 
                      da učiš više, daš sve od sebe i još brže napreduješ.</li>
                    <li class="text">Ne treba da očekuješ klasičan način rada samo suvoparnim tekstovima ili 
                      predugačkim video materijalom jer ovaj koncept  nije takav.</li>
                    <li class="text">Nama je važno da se sa razumevanjem nauče bitne stvari potrebne za samostalan 
                      praktičan rad jer postoji mogućnost da najbolji studenti dobiju prve klijente već u toku stepa 2.</li>
                    
                </ul>
                <p class="bold_text"></p>
                <img :src="require('@/assets/mob.jpeg')" alt="">
                <p class="bold_text">Kako izgleda učenje programiranja sa nama? </p>
                <div class="text_line"></div>
                <p class="text">Šta je potrebno da uradiš da sebe pripremiš za život vredan življenja?</p>
                <p class="text">Imaš tri stepa ispred sebe, a uz pomoć naših mentora prelaziš ih brzo i lako.</p>
                <p class="bold_text">Kako izgledaju stepovi? </p>
                 <div class="card" @mouseleave="changeShow(false)" id="AI1">
                  <!-- <img :src="require('@/assets/fe.jpeg')" alt=""> -->
                  <br>
                  <p class="text bold_text">STEP 1</p>
                  <div class="text_line"></div>
                  <br>
                  <ul>
                    <li class="text">Prva stvar koju radimo je 
                      podešavanje zajedničkog radnog okruženja koje ćeš dobiti u uputstvu 
                      putem mejla kojim si se prijavio.</li>
                    <li class="text">Uči se na posebnoj platformi na kojoj imaš linkove ka lekcijama 
                      poređane po redosledu učenja.</li>
                    <li class="text">Imaš mogućnost da budeš u stalnom kontaktu sa svojim mentorima</li>
                    <li class="text">Objašnjeno ti je šta je bitno da se naučiš, a još važnije šta 
                      <span class="text bold_text">NE TREBA da učiš</span></li>
                    <li class="text">Pored standardnog praćenja raznih tutorijala dobijaš i razne igrice, kvizove i 
                      testove koji će rapidno da te ubrzaju</li>
                    <li class="text">Posle određenog bloka lekcija i testova radiš završni test koji 
                      ti je potreban da pređeš na sledeći step</li>
                  </ul>
                </div>
                <div class="card" @mouseleave="changeShow(false)" id="AI1">
                  <!-- <img :src="require('@/assets/fe.jpeg')" alt=""> -->
                  <br>
                  <p class="text bold_text">STEP 2</p>
                  <div class="text_line"></div>
                  <br>
                  <ul>
                    <li class="text">Do sada smo naučili osnove HTML-a, CSS-a i već imamo prve sajtove iza sebe</li>
                    <li class="text">Ovde se odvajamo na kreativne koji žele da se bave dizajnom i njih usmeravamo
                       na učenje UI/UX dizajna</li>
                    <li class="text">To je idealna prilika za kreativne devojke koje mogu jako dobro da se ostvare 
                    u ovom vrlo traženom delu IT industrije</li>
                    <li class="text">Manje kreativni ili vise skloni logici kreću sa učenjem osnova Java Scripta.</li>
                    <li class="text">Ovde upadaš u tim koji mentori sastavljaju i dobijaš prvi live projekat na kome ćeš raditi</li>
                    <li class="text">Sa svojim timom učestvuješ u razradi projekta kao i raspodeli taskova koje treba da uradite</li>
                    <li class="text">Ovde ćeš pomirisati život programera i cele IT zajednice, mestu gde svako svakome pomaže</li>
                    <li class="text">Dalje već počinjemo polako sa radom na realnim projektima i vežbama ozbiljnijih stvari</li>
                    <li class="text">Za prelazak na sledeći korak potrebni su ti razni testovi i mišljenja mentora, ali ne brini,
                      ako se skoncentrišeš na to što radiš sigurno možeš dalje</li>
                  </ul>
                </div>
                <div class="card" @mouseleave="changeShow(false)" id="AI1">
                  <!-- <img :src="require('@/assets/fe.jpeg')" alt=""> -->
                  <br>
                  <p class="text bold_text">STEP 3</p>
                  <div class="text_line"></div>
                  <br>
                  <ul>
                    <li class="text">Dobro došli u zemlju čuda </li>
                    <li class="text">Ovde uveliko radiš sa naučenim, a pored toga učiš i nove stvari</li>
                    <li class="text">Imaš izgrađenu svoju ekipu sa kojom radiš i mi vas učimo kako da sa 
                      znanjem koje imate krenete ozbiljno da zaradjujete</li>
                    <li class="text">Naši mentori će iz svake ekipe birati vredne i talentovane i za njih imamo posebne planove</li>
                    <li class="text">U ovom stepu se otvaraju mogućnosti za zaradu sa strane koju pravite sa svojim timom 
                      i za zaradu za rad sa nama</li>
                    <li class="text">I na kraju te učimo svim mogućnostima za online zaradu, jer ko više zna o tome nego baš 
                      mi iz same IT zajednice. :) </li>
                  </ul>
                  <p class="text bold_text">Koja znanja ćeš sa nama naučiti :</p>
                   <ul>
                     <li class="text">HTML5</li>
                     <li class="text">CSS</li>
                     <li class="text">Visual Studio Code</li>
                     <li class="text">GIT</li>
                     <li class="text">SASS</li>
                     <li class="text">Vanila Java Script</li>
                     <li class="text">Znaćeš da napraviš odličan sajt</li>
                     <li class="text">Na osnovu tvojih talenata daćemo ti predloge i 
                       smernice za dalje učenje kao i  zaradu</li>
                     <li class="text">Imaš znanja za rad u timu programera koristeći najnovije alate</li>
                     <li class="text">Znaćeš koje su sve mogućnosti zarade online</li>
                     <li class="text">Imaš u portfoliju žive projekte koji su presudni za dobijanje posla u nekoj kompaniji</li>
                     <li class="text">Moći ćeš da biraš između posla u kompaniji ili svog biznisa</li>
                     <li class="text"> kao i velike mogućnosti za pasivne prihode od sajtova koji zarađuju dok spavaš a ti 
                       se recimo baviš nekim poslom za koji si studirao</li>
                     <li class="text">Možeš da postaneš član našeg tima i na taj način dalje napreduješ</li>
                     <li class="text">Ili možeš da biraš samostalan put </li>
                     <li class="text">Veruj da nije moguće pogrešiti, greška je samo ako odustaneš... </li>
                  </ul>
                </div>
            </div>
          
        </transition>
      </div >
         <div class="card" @mouseleave="changeShow(false)" id="AI1">
                  <!-- <img :src="require('@/assets/fe.jpeg')" alt=""> -->
                  <br>
                  <p class="text bold_text">TOP 5 stvari koje postižeš učeći  sa nama!</p>
                  <div class="text_line"></div>
                  <br>
                  <ul>
                    <li class="text">Uciš programiranje malim koracima ali velikom brzinom</li>
                    <li class="text">Brzo do prve zarade od programiranja</li>
                    <li class="text">Dobijaš ekipu sa kojom deliš svoje ideje i sa kojom radiš na projektima</li>
                    <li class="text">Menjaš život sebi u potpunosti i imaš šansu za neverovatnu priču </li>
                    <li class="text">Vremenom shvataš da si uspešan. To te vuče da treniraš jer bitno je i kako izgledaš.
                       Uz trening ide i zdrava ishrana. Na kraju tvoj život je promenjen u potpunosti u odnosu na život 
                       koji imaš ako ništa ne preduzmeš.</li>
                  </ul>
                  <p class="text">Ako se setimo notesa i golova u raspalom telefonu
                    samo da znaš 5 godina je previše ako se odlučiš
                    za ovaj put</p>
                    <p class="text"><span class="text bold_text">MAX 2-3 godine</span> da sve što si napisao bude rešeno... </p>
                    <p class="text">Potrudi se, budi sa nama 4-6 meseci.</p>
                    <p class="text">Posle toga radi, stiči iskustvo i zarađuj nekih godinu 
                      dana i sada si u <span class="text bold_text">STEPU 4...</span> Njega kreiraš sam... <span class="text bold_text">Good Lock :)</span></p>
                    <p class="text"></p>
                
                </div>
      <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/logo.svg')" alt="">

        <!-- <div class="readmore" @click="changeShow(true)">
            <span>Read more</span>
            <div class="line"></div>
        </div> -->
        <transition name="slide">
            <div class="extend" v-if="true">
                <p class="text">Na kraju, zamolićemo te da uradiš nešto. Idi na ono isto mesto sa početka priče, 
                  sedi, stavi sebi u krilo taj laptop od 3 000 evrića i kreiraj sebi budućnost kakvu zamišljaš.</p>
                <p class="text">Henri Ford je lepo rekao " Ako misliš da možeš i ako misliš da ne možeš- oba puta si 
                  u pravu. ", a znamo da možeš!</p>
                <p class="text">P.S. Ne zaboravi da nam pustiš porukicu kakav je osećaj uspeha. :)</p>
                <p class="text">Prrijavi se !</p>
                
            </div>
        </transition>
        <!-- <div class="info">
            <h3>AI1</h3>
            <p>Contact us <br> about this service</p>
            <a href="mailto:office@wiequee.com?subject=WQ - All in one development service" @click="sendMail">Mail us</a>
        </div> -->
    </div >

</div>
</template>
<script>
export default {
    name: 'AllInOne',
    data () {
        return {
            show: true
        }
    },
    methods: {
        changeShow (a) {
            this.show = a
        },
        sendMail (e) {
            e.preventDefault();
            
            this.$root.$emit('trigger-form', {subject: 'Enquery about All in one service'})

        }
    }
}
</script>
<style lang="scss" scoped>
    .card{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: left;
        margin: 50px auto;
        max-width: 650px;
        min-width: 650px;
        padding: 30px;
        background-color: #fdfdfd;
        box-shadow: 20px 50px 50px rgba(14,3,39,0.07059);
        border-radius: 30px;
        border: 2px solid #6f6f6f;
        .info{
            display: block;
            position: absolute;
            width: 210px;
            top: -2px;
            height: calc(100% + 4px);
            right: -30px;
            transition: all .3s ease-in-out;
            z-index: 2;
            padding: 10px;
            opacity: 0;
            background: #6F6F6F;
            color: #fdfdfd;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            border-top: 2px solid #F29B30;
            border-bottom: 2px solid #F29B30;
            border-right: 2px solid #F29B30;
            a{
                outline: none;
                display: block;
                text-decoration: none;
                text-align: center;
                cursor: pointer;
                transition: all .3s ease-in-out;
                padding: 20px;
                color: #6F6F6F;
                background: #F29B30;
                border: none;
                border-radius: 40px;
                width: 100%;
                font-size: 24px;
                &:hover{
                    background: #B2B200;
                    font-weight: bold;
                    color: #fdfdfd;
                }
            }
            h3{
                font-size: 90px;
            }
            p{
                font-size: 22px;
                margin-bottom: 50px;
            }
        }
        &:hover{
            // border: 2px solid #EBFF00;
            // .info {
            //     right: -180px;
            //     opacity: 1;
            // }
            
        }
        .bold_text{
          font-weight: bold;
        }
        .text{
          margin-top: 0.5rem;
        }
        .text_line{
                // transition: all .3s ease-in-out;
                // min-width: 0;
                // min-width: 0;
                width: 100%;
                height: 3px;
                background-color: #F29B30;
            }
        img{
            height: auto;
            width: 100%;
        }
        h3{
            border-bottom: 3px solid #F29B30;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        .readmore{
            width: max-content;
            span {
                transition: all .3s ease-in-out;
                color: #6F6F6F;
            }
            .line{
                transition: all .3s ease-in-out;
                min-width: 0;
                width: 0;
                height: 2px;
                background-color: #B2B200;
            }
            &:hover{
                span{
                    color: #B2B200;
                }
                .line{
                    min-width: 100%;
                    width: 100%;
                }
            }
        }
        @media only screen and (max-width: 768px) {
            max-width: 90%;
            min-width: 90%;
            .info {
                display: none;
            }
        }
        .extend{

            p{
                padding-top: 20px;
                padding-bottom: 20px;
            }
            li{
                font-size: 18px;
                list-style-type: disc;
            }

            .mobile{
                display: none;
                @media only screen and (max-width: 768px) {
                    display: block;
                    background: #6F6F6F;
                    color: #fdfdfd;
                    border-bottom-left-radius: 30px;
                    border-bottom-right-radius: 30px;
                    border-top: 2px solid #F29B30;
                    border-bottom: 2px solid #F29B30;
                    border-right: 2px solid #F29B30;
                    margin: 0 -30px -30px -30px;
                    a{
                        outline: none;
                        display: block;
                        text-decoration: none;
                        text-align: center;
                        cursor: pointer;
                        transition: all .3s ease-in-out;
                        padding: 20px;
                        color: #6F6F6F;
                        background: #F29B30;
                        border: none;
                        border-radius: 28px;
                        width: 100%;
                        font-size: 24px;
                        &:hover{
                            background: #B2B200;
                            font-weight: bold;
                            color: #fdfdfd;
                        }
                    }
                    h3{
                        display: inline-block;
                        font-size: 90px;
                        border-right: 3px solid #F29B30;
                        border-bottom: 3px solid transparent;
                        padding-right: 10px;
                        height: 110px;
                        margin-bottom: 0;
                    }
                    p{
                        display: inline-block;
                        font-size: 22px;
                        margin-bottom: 0;
                        padding-bottom: 0;
                    }
                }
            }
        }
    }
    .slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    }

    .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    }
</style>