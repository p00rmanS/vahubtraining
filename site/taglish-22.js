// Taglish companions, part 22 (chapters 55 and 56).
Object.assign(taglishExtra, {
  "54-0": {
    example:
      "Araw-araw na sumusulat ng parehong sagot sa customer ang fictional na VA para sa bakery. Gumawa siya ng template: gawain 'sumulat ng sagot', konteksto [ORDER DETAILS], tuntunin 'magiliw, wala pang 80 salita, walang pangako ng petsa ng delivery, markahan ng [CHECK] ang hindi alam', anyo 'subject at body'. Sinubukan niya sa tatlong fictional na kaso, kasama ang galit na customer, at inayos ang tuntuning nagpapahintulot na mangako ng petsa. Itinala niya ang v2, petsa ng test, at sample. Bumaba mula walong minuto tungong tatlo ang bawat sagot, at lagi niyang chine-check ang order number at tono bago ipadala para sa approval.",
    exercise:
      "Gumawa ng isang template para sa paulit-ulit na gawain, subukan sa tatlong fictional na kaso, at itala ang version at natipid na oras.",
    mistake:
      "Ang paggamit ng prompt nang isang beses nang walang test at pagtitiwala sa output ay nagpapaulit ng error tuwing gagamitin muli.",
    tips: 'Magdagdag ng isang tuntunin sa bawat template: "Kung hindi ka sigurado, isulat ang [CHECK] sa halip na manghula." Ginagawang nakikitang flag ang tahimik na error. Magtago ng folder na "bad output"; mas marami kang matututunan sa pumalpak kaysa sa tagumpay.',
    why: "Ang pagsubok sa iba't ibang fictional na kaso ay nakakahanap ng kahinaan bago maapektuhan ang totoong trabaho, at ang mga tala ang nagpapabuti sa template.",
  },
  "54-1": {
    example:
      "Nagtanong ang may-ari ng fictional na bakery kung gumagamit ang VA ng AI. Nag-alok ang VA ng isang-pahinang patakaran: puwedeng tumulong ang AI sa pagsulat ng email at pagbubuod ng pampublikong impormasyon; walang pangalan ng customer, detalye ng bayad, o recipe ang ilalagay; bawat output ay ire-review; at sasabihin niya ang 'drafted with AI, reviewed by me' sa content. Pumayag ang owner. May draft na promotion na nagsasabing 'Voted best in the city'. Gamit ang rubric, hindi niya ito ma-verify, kaya inalis niya ang claim, itinama ang petsa, at inayos ang tono. Itinala niya ang binago at ipinadala para sa approval.",
    exercise:
      "Sumulat ng isang-pahinang AI-use policy para sa practice na client at i-review ang practice na AI draft gamit ang rubric.",
    mistake:
      "Ang pagpapadala ng AI-generated na teksto nang hindi chine-check ay puwedeng maglabas ng imbentong facts, maling numero, o pribadong detalye sa pangalan ng client.",
    tips: "Basahin nang malakas ang AI draft bago i-review; lumilitaw ang kakaibang pananalita at mukhang imbentong claim kapag naririnig. Kung ipinagbabawal ng patakaran ng client ang AI, sabihing 'naiintindihan' at magtala; mas malaking tiwala ang dulot ng paggalang kaysa sa natipid na oras.",
    why: "Puwedeng mag-imbento ng facts ang AI na mukhang kapani-paniwala. Kung hindi mo ma-verify sa totoong source, hindi ito dapat lumabas.",
  },
  "55-0": {
    example:
      "Naghanda ang bagong fictional na VA ng limang kuwento. Para sa 'Tell me about a time you made a mistake', inoutline niya muna sa Taglish, saka sinabi sa English: 'In a practice project, I sent a draft with the wrong date. I noticed within ten minutes, told my mentor, and corrected it. Since then I check dates against the calendar before sending.' Tumagal ito ng 45 segundo at may result at aral. Nag-record siya ng sarili, binawasan ang filler words, naghanda ng dalawang tanong, at nagpadala ng thank-you na bumabanggit sa weekly report ng client.",
    exercise:
      "Sumulat ng tatlong practice na kuwento sa format na situation-task-action-result, mag-record ng isa nang malakas, at sumulat ng dalawang tanong.",
    mistake:
      "Ang pag-imbento o pagpapalaki ng karanasan ay puwedeng mabuking ng follow-up na tanong o trial task at nagtatapos sa oportunidad.",
    tips: "Sabihin muna ang result sa practice mo, saka ang kuwento; naaalala ng interviewer ang resulta, hindi ang pagkakasunod ng pangyayari. Mag-practice kasama ang kaibigang nagpuputol sa iyo; may mga putol sa totoong interview, at kasanayan ang maayos na pagbawi.",
    why: "Ang totoong practice at volunteer na halimbawa ay nagpapakita ng tunay na kilos. Ang imbentong kuwento ay nabubuwag sa simpleng follow-up.",
  },
  "55-1": {
    example:
      "Kinuha ng may-ari ng fictional na bakery ang VA para sa 10 oras kada linggo. Bago magsimula, kinumpirma nila nang nakasulat: saklaw (inbox, orders sheet, social scheduling), rate at petsa ng bayad, oras 9 hanggang 1 oras ng Manila, sagot sa loob ng isang business day, kumpidensyalidad, at 14 na araw na abiso. Unang linggo: access at isang supervised na gawain. Ikalawa: kinuha ng VA ang order-sheet check na may checklist at nagsimula ng playbook. Ikatlo: binawasan ng reply template ang 30 minuto araw-araw. Tuwing Biyernes, nagpapadala siya ng apat-na-linyang update. Sa 30-day review, idinagdag ng owner ang supplier emails sa saklaw.",
    exercise:
      "Isulat ang mensahe ng terms at apat-na-linggong plano para sa practice na client, kasama ang unang weekly update.",
    mistake:
      "Ang pagsisimula sa berbal na kasunduan ay nag-iiwan ng magkaibang tandaan ng bawat panig, na nagdudulot ng away sa huli.",
    tips: "Pumili ng isang maagang panalong mararamdaman ng owner sa loob ng isang linggo, kahit maliit; ang ramdam na panalo sa unang linggo ang bumibili ng tiyaga para sa lahat ng iba. Ilagay ang 30-day review sa calendar sa unang araw; ang naka-book na review ay nagagawa, ang planadong review ay nalilimutan.",
    why: "Tinitiyak ng nakasulat na kumpirmasyon na pareho ang tandaan ng dalawang panig sa terms at pinoprotektahan kayong pareho.",
  },
});
