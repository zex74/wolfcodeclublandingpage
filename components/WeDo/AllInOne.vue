<template>
<div>
    <div class="card" @mouseleave="changeShow(false)" id="AI1">
        <img :src="require('@/assets/allinone.svg')" alt="">
        <h3>Jednostavno je - KOD NAS</h3>
        <p>Sastavili smo tim IT-evaca koji je osmislio kurs programiranja na kom za kratko vreme mozes da naucis
          sve sto ti je potrebno da sam radis na projektima, cak i ako nemas prethodno znanje.
        </p>
        
        <!-- <div class="readmore" @click="changeShow(true)">
            <span>Read more</span>
            <div class="line"></div>
        </div> -->
        <transition name="slide">
            <div class="extend" v-if="true">
                <p>Koja znanja ces sa nama nauciti:</p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>VanilaJS</li>
                    <li>Znaces sam da napravis odlican sajt</li>
                    <li>Mi cemo utvrditi tvoje talente i dati predloge za tvoj brzi razvoj</li>
                    <li>Znaces da radis u timu programera koristeci najnovije alate</li>
                    <li>Znaces koje su sve mogucnosti zarade online</li>
                    <li>Imaces u portfoliju zive projekte koji su presudni za dobijanje posla u nekoj kompaniji</li>
                    <li>Moci ces da biras izmedju posla u kompaniji ili svog biznisa kao i velike mogucnosti za pasivne prihode od sajtova koji zaradjuju dok spavas</li>
                    <li>Naravno mozda postanes clan naseg tima, a sa nama ce biti raznih varijanti jako zanimljivih</li>
                    <li>Iz ove tacke ces moci sam dalje da odaberes na koju stranu u programiranju zelis da ides</li>
                    <li>Veruj da nije moguce pogresiti... Greska je samo ako odustanes...</li>
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
        <img :src="require('@/assets/allinone.svg')" alt="">
        <h3>Koja je mana svega ovoga ?</h3>
        <p>Rekli smo ti, i mi smo bili na tvom mestu, sve razumemo.</p>
        <br>
        <p>
          Jednom kada zakoracis u IT svet i osetis koliko mozes da uradis, sta sve sebi
        mozes da priustis i kako se snovi lako ostvaruju pozeleces i ti da delis.
        Mi delimo svoje znanje, a ti?
        </p>
        <!-- <div class="readmore" @click="changeShow(true)">
            <span>Read more</span>
            <div class="line"></div>
        </div> -->
        <transition name="slide">
            <div class="extend" v-if="true">
                <p>TOP 5 stvari koje ces postici uceci sa nama!</p>
                <ul>
                    <li>Ucices programiranje malim koracima ali velikom brzinom</li>
                    <li>Brzim putem do prve zarade od programiranja</li>
                    <li>Napravicemo ti ekipu sa kojom ces deliti svoje ideje i sa kojom ces raditi na projektima</li>
                    <li>Promenices zivot sebi u potpunosti i pruzices sebi sansu za necerovatnu pricu</li>

                 
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
        <img :src="require('@/assets/allinone.svg')" alt="">
        <h3>
          Lorem ipsum dolor sit amet.
        </h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <br>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, qui?
        </p>
        <!-- <div class="readmore" @click="changeShow(true)">
            <span>Read more</span>
            <div class="line"></div>
        </div> -->
        <transition name="slide">
            <div class="extend" v-if="true">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
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
            border-top: 2px solid #EBFF00;
            border-bottom: 2px solid #EBFF00;
            border-right: 2px solid #EBFF00;
            a{
                outline: none;
                display: block;
                text-decoration: none;
                text-align: center;
                cursor: pointer;
                transition: all .3s ease-in-out;
                padding: 20px;
                color: #6F6F6F;
                background: #EBFF00;
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
        img{
            height: auto;
            width: 100%;
        }
        h3{
            border-bottom: 3px solid #EBFF00;
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
                    border-top: 2px solid #EBFF00;
                    border-bottom: 2px solid #EBFF00;
                    border-right: 2px solid #EBFF00;
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
                        background: #EBFF00;
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
                        border-right: 3px solid #EBFF00;
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