// Taglish companions, part 20 (chapters 51 and 52).
Object.assign(taglishExtra, {
  "50-0": {
    example:
      "Ang owner ng fictional na bakery ay nagtatala ng order sa sticky note. Gumawa ang VA ng Notion workspace na may isang Orders database (status, pickup date, customer, owner) at apat na view: board ayon sa status, calendar ayon sa pickup date, table ng lahat, at 'Today' na nakafilter sa pickup ngayon. May template na gumagawa ng bagong order page na may checklist. Ang home page ay may link sa limang view na ginagamit ng owner. Pagkatapos ng 20-minutong training sa phone ng owner, siya na mismo ang nagdagdag ng susunod na order.",
    exercise:
      "Idisenyo ang practice na workspace: isang database na may mga property, apat na view, isang template, at listahan ng link sa home page.",
    mistake:
      "Ang paggawa ng maraming hiwa-hiwalay na page na walang database ay nagpapahirap mag-filter, mag-report, o mag-handover ng impormasyon.",
    tips: "Buuin muna ang 'Today' view; kung isang bagay lang ang binubuksan ng owner tuwing umaga, iyon na iyon. Pangalanan ang bawat page ayon sa salitang ginagamit ng client sa paghahanap, hindi ang salita mo.",
    why: "Ang pare-parehong value ang nagpapatakbo nang maayos sa filter, board, at report. Ang free text ay lumilikha ng maraming baybay ng iisang status.",
  },
  "50-1": {
    example:
      "Gumagamit ang fictional na bakery ng accounting software na may bank feed. Sa Biyernes, nirepaso ng VA, na may limitadong role, ang feed. Ang 2,400 na deposito ay tumutugma sa invoice 104, kaya ni-match niya at hindi gumawa ng pangalawang income. Ang 310 na bayad sa hindi kilalang vendor ay walang resibo, kaya minarkahan niya itong tanong. Ini-categorize niya ang biniling packaging ayon sa chart ng accountant, nilakip ang resibo, at nagpadala sa owner ng isang listahan ng tatlong tanong. Sa katapusan ng buwan, may 15 na pagkakaiba sa bank balance; itinala niyang 'bank fee na hindi pa naitatala' at itinanong sa accountant kung paano ito itatala.",
    exercise:
      "Trabahuhin ang practice na bank feed: mag-match, mag-categorize, ilista ang mga tanong, at isulat ang tala sa katapusan ng buwan.",
    mistake:
      "Ang paggawa ng bagong income entry para sa bayad na tumutugma sa umiiral na invoice ay nagdodoble ng kita at sumisira sa bawat report.",
    tips: "Huwag lutasin ang tanong sa pamamagitan ng paghula; isang minuto lang ang halaga ng naka-park na tanong, pero isang oras ng accountant ang halaga ng maling hula sa katapusan ng taon. Isulat ang memo na parang babasahin ng taong hindi pa nakakita ng resibo makalipas ang isang taon.",
    why: "Pinananatiling isang beses lang naitatala ang kita kapag nag-match. Ang hiwalay na entry ay nagdodoble nito.",
  },
  "50-2": {
    example:
      "Nakakatanggap ang fictional na bakery ng custom-cake request sa web form. Gumawa ang VA ng Zap: kapag may bagong sagot, nilalaktawan ng filter ang walang email o may 'test' sa pangalan, tapos nagdadagdag ng row sa orders sheet at nagpapadala ng mensahe sa channel ng owner. Sinubukan niya gamit ang pekeng data, nagdagdag ng duplicate check, at ikinonekta lang ang mga account na pag-aari ng client. Pupunta sa kanya at sa owner ang error notification. Pagkatapos ng launch, binantayan niya ang unang sampung run, may nakitang maling format ng petsa, inayos ang mapping, at sumulat ng isang-pahinang gabay kung paano i-pause.",
    exercise:
      "Idisenyo sa papel ang practice na automation: trigger, filter, action, test data, error alert, at paraan ng pag-pause.",
    mistake:
      "Ang direktang pagkonekta ng live trigger sa email para sa customer nang walang test ay puwedeng magpadala ng maling mensahe sa marami sa loob ng ilang minuto.",
    tips: "Maglagay ng 'test' filter sa unang araw: laktawan ang anumang entry na may 'test' sa pangalan; pinoprotektahan nito ang live system sa sarili mong eksperimento. Maglagay ng isang-linyang 'paano ito patayin' sa itaas ng gabay; sa pagkakamali, mas mahalaga ang bilis kaysa talino.",
    why: "Ang pagsubok gamit ang pekeng data at ligtas na output ay nakakahanap ng mapping error bago pa makita ng totoong customer.",
  },
  "50-3": {
    example:
      "Tatlong tanong ang itinanong ng fictional na catering business: ilan ang bagong lead ngayong linggo, ilang proposal ang naghihintay nang higit sampung araw, at aling source ang may pinakamagandang lead. Nakita ng VA na 12 deal ang walang source, kaya isinulat niya ito sa dashboard. Gumawa siya ng number tile para sa bagong lead (14, mula 9), bar chart ng bukas na deal ayon sa stage, at table ng deal na higit sampung araw nang naghihintay. Nag-verify siya ng limang record sa CRM at nagpadala ng Monday summary na may tatlong bullet: tumaas ang lead, tatlong proposal ang nakatigil, ayusin ang kulang na source.",
    exercise:
      "Tukuyin ang tatlong metric, gumuhit ng dashboard, suriin ang practice na data para sa problema, at isulat ang weekly summary.",
    mistake:
      "Ang paggawa ng report sa maruming data at pagtatago ng problema ay nagtutulak sa owner na magdesisyon batay sa maling numero.",
    tips: "Maglagay ng isang pangungusap sa itaas ng bawat chart na nagsasabi kung ano ang dapat mapansin ng owner; ang chart na walang pangungusap ay nagpapagawa sa owner ng trabaho mo. Ihambing sa nakaraang linggo, hindi sa wala; ang numerong mag-isa ay kuwentong walang saysay, ang numerong may paghahambing ay impormasyon.",
    why: "Pinananatiling mapagkakatiwalaan ang report kapag bukas tungkol sa kulang na data. Ang paghula o pagtatago nito ay humahantong sa maling desisyon.",
  },
  "51-0": {
    example:
      "May unang tawag ang fictional na VA sa may-ari ng bakery. Noong nakaraang araw, sinubukan niya ang headset, inilipat ang lampara sa harap niya, at inayos ang shelf sa likod. Sumali siya nang dalawang minuto nang maaga, handa ang phone hotspot, at naka-mute hanggang sa turn niya. Nang mag-lag ang koneksyon ng owner, inulit niya ang mahahalagang punto sa chat. Bago mag-share ng screen, isinara niya ang mga mensahe at ibinahagi lang ang spreadsheet window. Pagkatapos humingi ng pahintulot, nag-record siya at nagpadala ng maikling recap na may susunod na hakbang sa hapon ding iyon.",
    exercise:
      "Gumawa ng pre-call checklist, mag-record ng 60-segundong practice na pagpapakilala, suriin ang audio at ilaw, at isulat ang recap na mensahe.",
    mistake:
      "Ang pagbabahagi ng buong screen na bukas ang pribadong mensahe ay puwedeng maglantad ng kumpidensyal na impormasyon sa loob ng ilang segundo.",
    tips: "Mag-record ng 60 segundo ng sarili mo nang isang beses at panoorin; tatlong bagay ang agad mong maaayos: tunog, ilaw, at kung saan ka nakatingin. Magdikit ng sticky note sa tabi ng camera na may tatlong layunin ng tawag para hindi ka mawala at nakataas ang mata mo.",
    why: "Pinakamahalaga ang malinaw na audio. Ayos lang ang simpleng larawan; mas mahirap ang buong tawag kapag hindi malinaw ang tunog.",
  },
  "51-1": {
    example:
      "Hindi mahanap ng may-ari ng fictional na bakery kung saan mag-aaprub ng order sa bagong tool. Pumayag ang VA sa 20-minutong session, naglista ng limang hakbang, at isinara ang sarili niyang mensahe. Ibinahagi lang niya ang browser window at sinabing, 'Magki-click ako sa Orders, tapos Pending.' Pagkatapos ay ang owner na ang sumubok habang ginagabayan ng VA. Nang lumabas ang payment page na may card number, sinabi niya ito, hiniling na isara, at nagpatuloy. Nagpadala siya ng buod na may may-numerong hakbang at screenshot na itinago ang pangalan ng customer, at itinalang wala siyang binago na setting.",
    exercise:
      "Magplano ng 20-minutong walkthrough para sa practice na gawain: mga hakbang, bubuksang window, panganib sa privacy, at follow-up na buod.",
    mistake:
      "Ang paghingi sa client ng password habang tumatawag ay naglalagay sa panganib sa mga account nila at lumalabag sa batayang seguridad.",
    tips: "Sabihin ang 'magki-click ako ng X' bago mag-click; pinapanatili nitong nakaorient ang client at ipinapakitang walang nakatagong ginagawa. Gumamit ng bagong browser profile para sa client session; walang bookmark, naka-save na login, o bukas na tab na puwedeng mag-leak.",
    why: "Dapat isara agad ang pribadong data, huwag kopyahin, at banggitin nang hayagan para manatili sa kontrol ang client.",
  },
});
