// Taglish companions, part 3 (lessons 11-1 to 15-0).
Object.assign(taglishExtra, {
  "11-1": {
    example:
      "Kailangan ng desisyon bago mag-Thursday noon: pumili ng isa sa dalawang fictional delivery option. Ang A ay 100 at umaabot sa deadline; ang B ay 90 pero hindi pa kumpirmado ang timing. Irekomenda ang A kung mas mahalaga ang katiyakan kaysa sa 10 na matitipid, at i-flag na kailangang i-confirm ang B.",
    exercise:
      "Sumulat ng brief na hindi hihigit sa 200 words na naghahambing ng dalawang fictional event venue, kasama ang kabuuang gastos, capacity, availability ng petsa, at hindi tiyak na cancellation.",
    mistake:
      "Kapag ibinuhos mo ang lahat ng impormasyon, ibinabalik mo sa client ang pagsusuri. Gawing malinaw ang aktuwal na desisyon.",
    tips: 'Simulan sa "Decision needed by [petsa/oras/time zone]". Ilagay ang detalyadong ebidensya sa naka-link na appendix kung angkop.',
    why: "Ang malinaw na desisyon at timing ay tumutulong sa client na kumilos batay sa ebidensya.",
  },
  "11-2": {
    example:
      "Ang designer ang nagbibigay ng menu graphics, ang owner ang nag-aaprub ng presyo, at ang VA ang naghahanda ng captions. Binabanggit ng handoff ng VA ang aprubadong version ng presyo at ang kulang na photo permission. Maghihintay ang publishing hanggang malutas ang dalawang dependency.",
    exercise:
      "Gumawa ng anim-na-task na launch plan na kinasasangkutan ng owner, designer, supplier, at VA. Sumulat ng dalawang handoff message at isang escalation para sa natigil na dependency.",
    mistake:
      "Kapag lahat ay responsable, puwedeng walang responsable. Pangalanan ang isang owner sa bawat aksyon.",
    tips: "Hilingin sa tatanggap na i-confirm ang mahalagang handoff. I-escalate ang dependency base sa epekto, hindi sa inis.",
    why: "Ang pagtanggap at magagamit na context ay nakakabawas ng tahimik na pagtigil.",
  },
  "11-3": {
    example:
      "Para sa 30-minutong online workshop, mag-schedule ng limang-minutong intro, 15-minutong demonstration, at sampung-minutong tanungan. I-confirm ang presenter, i-test ang link, magtalaga ng backup host, at magpadala ng aprubadong joining instructions.",
    exercise:
      "Magplano ng fictional na 30-minutong workshop para sa 12 attendees. Isama ang invitations, run of show, access checks, backup plan, at may-ari ng follow-up.",
    mistake:
      "Hindi pa buong event plan ang reservation ng venue o platform. Kailangan pa rin ng owner ang mga tao, materyales, at contingency.",
    tips: "I-test ang karanasan ng pagsali bago ipadala ang instructions. Magtalaga ng backup owner para sa pinakamahalagang hakbang ng event.",
    why: "Ang awtoridad sa pagbili at kumpirmadong terms ay nagpoprotekta sa mga commitment ng client.",
  },
  "12-0": {
    example:
      "Ang 20-order tracker ay nangangailangan ng unique IDs, tamang amounts, at walang private na impormasyon sa shared report. I-check ang lahat ng ID at amount laban sa source, i-verify nang hiwalay ang total, at suriin ang sharing permissions. Hindi pamalit sa pag-verify ng amount ang spelling spot-check.",
    exercise:
      "Gumawa ng QA checklist para sa 20-record order tracker at tatlong customer reply draft. Ipaliwanag kung aling checks ang sumasaklaw sa bawat record at bakit.",
    mistake:
      "Kapag total lang ang chineck mo, puwedeng makaligtaan ang mga mali na nagkakansela sa isa't isa. I-validate din ang mahahalagang indibidwal na record.",
    tips: "Gumamit ng independiyenteng check para sa mahahalagang total. Huwag tawaging ganap na na-verify ang trabahong sample lang ang chineck.",
    why: "Hindi nagpapatunay na tama ang mga record sa ilalim ang pagtutugma ng total.",
  },
  "12-1": {
    example:
      "Hindi sinasadyang nabago ng status cleanup ang 12 rows. Nagdagdag naman ng limang valid na order ang teammate pagkatapos ng error. Sa halip na bulag na ibalik ang buong sheet, ihambing ang mga version at ibalik lang ang apektadong status habang pinapanatili ang mga bagong order.",
    exercise:
      "Gumawa ng fictional tracker, baguhin nang mali ang tatlong value, tapos magdagdag ng dalawang valid na row. Idokumento ang recovery plan na nagpapanatili sa mga bagong row.",
    mistake:
      "Puwedeng mabura ng pagbabalik sa lahat ang valid na gawa ng magkakasama. I-check muna ang saklaw.",
    tips: "I-check ang aktibidad ng mga collaborator bago magbalik ng shared file. Itala nang eksakto kung aling fields ang naibalik at alin ang pinanatili.",
    why: "Dapat isaalang-alang ng pagbabalik ang mga kapaki-pakinabang na update pagkatapos ng mas lumang version.",
  },
  "12-2": {
    example:
      "May fictional order report na naibahagi sa maling practice account. Tukuyin ang file at access setting, higpitan ang access kung awtorisado, abisuhan ang owner, at itala ang alam na. Huwag sabihing walang nakakita maliban kung ebidensya ang magpapatunay.",
    exercise:
      "Mag-draft ng incident report para sa automation na gumawa ng dobleng reminder drafts. Isama ang containment, apektadong IDs, panukalang recovery, at oras ng follow-up.",
    mistake:
      "Ang kumpiyansang walang ebidensya ay puwedeng makalinlang sa owner. Ihiwalay ang kumpirmadong epekto sa posibleng epekto.",
    tips: "Magtago ng mapagkakatiwalaang escalation contact na nasa labas ng apektadong sistema. Ihiwalay ang kumpirmadong epekto sa posibleng exposure.",
    why: "Ang tapat na update ay tumutulong sa awtorisadong owner na tumugon habang kitang-kita pa rin ang kawalang-katiyakan.",
  },
  "12-3": {
    example:
      'Dumodoble ang reminder drafts dahil walang unique-order check ang workflow. Hindi inaayos ng "mag-ingat pa" ang sanhi. Magdagdag ng draft-exists check gamit ang Order ID, i-test ang paulit-ulit na trigger, at sukatin kung bumabalik ang dobleng drafts.',
    exercise:
      "Suriin ang report ng late na delivery na dahil sa approval request na huli naipadala. Magmungkahi ng deadline rule, escalation trigger, at review measure.",
    mistake:
      "Kapag tao lang ang sinisisi nang hindi sinusuri ang proseso, maiiwan ang parehong pagkabigo.",
    tips: "I-test ang prevention step laban sa orihinal na pagkabigo. Piliin ang pinakamaliit na pagbabago na direktang tumutugon sa sanhi.",
    why: "Direktang tinutugunan ng check ang dobleng trigger sa halip na ilarawan lang ang sintomas.",
  },
  "13-0": {
    example:
      '"Chineck ang 40 records; itinama ang anim na dokumentadong format issue; nag-flag ng dalawang nawawalang amount" ay sinusuportahan ng change log. Ang "Nakatipid ng 10 oras at dumoble ang kita" ay walang basehan maliban kung maayos na nasukat ang mga resultang iyon.',
    exercise:
      "Sumulat ng weekly value summary mula sa fictional change log na may 40 checks, anim na corrections, at dalawang hindi pa nareresolbang amount. Ihiwalay ang facts sa mga posibleng benepisyo.",
    mistake:
      "Ang malalaking claim ay sumisira ng kredibilidad kapag hindi mo kayang suportahan. Mas matibay ang tiyak na ebidensya.",
    tips: "Gumamit ng pare-parehong depinisyon ng before/after na sukat. Lagyan ng malinaw na label ang mga simulated na resulta sa portfolio samples.",
    why: "Sinusuportahan ng change log ang mga correction; hindi nito pinapatunayan ang epekto sa kita o oras.",
  },
  "13-1": {
    example:
      "Dalawang beses nang dumami ang orders ng bakery. Sa review, ipakita ang kasalukuyang volume limit at workload data, tapos magmungkahi ng package na mas mataas ang capacity o mas makitid na serbisyo na may orihinal na capacity. Ang client ang pipili bago magsimula ang bagong scope.",
    exercise:
      "Gumawa ng 15-minutong client-review agenda at dalawang renewal option para sa fictional na client na lumago mula 20 patungong 40 ang lingguhang order.",
    mistake:
      "Kapag itinuring mong approval ang goodwill para sa dagdag na trabaho, puwede kang ma-overload. Magkasundo sa nabagong terms.",
    tips: "Maghanda ng dalawang kayang opsyon sa renewal sa halip na isang malabong upsell. Isama ang mga hindi pa tapos sa review, hindi lang ang mga nagawa.",
    why: "Pinapadali ng malinaw na review ang pagbabago at binibigyan ang client ng makatotohanang opsyon.",
  },
  "13-2": {
    example:
      "Ang specialty sa customer support ay puwedeng magsama ng ticket triage, pag-draft ng reply ayon sa policy, pag-escalate ng exception, at lingguhang issue report. Hindi awtomatikong kasama ang awtoridad sa refund o kakayahang i-configure ang lahat ng ticketing system.",
    exercise:
      "Gumawa ng specialty plan para sa inbox support, e-commerce administration, o executive coordination. Maglagay ng limang competency, tatlong sample project, at dalawang hangganan.",
    mistake:
      "Kapag tinawag mo ang sarili mong eksperto bago mo naipakita ang skill, gumagawa ka ng expectation na baka hindi mo matupad.",
    tips: "Gumawa ng isang sample na puno ng exceptions para sa napiling specialty. Ilarawan muna ang problema ng negosyo bago ang software na gamit mo.",
    why: "Ang ebidensya at tapat na limitasyon ay tumutulong sa client na suriin ang serbisyong kaya mong ihatid.",
  },
  "13-3": {
    example:
      "May dalawang nawawalang exception note ang una mong tracker. Nagdagdag ka ng exception check at inulit gamit ang bagong dataset. Tumpak na ang susunod na tracker, pero malabo ang handoff mo. Ang susunod mong practice target ay malinaw at kayang gawing aksyon na delivery message.",
    exercise:
      "Suriin ang isang tracker, support reply, at client update. I-score ang katumpakan, pagkakumpleto, komunikasyon, at awtoridad/privacy mula 0–2 bawat isa. Sumulat ng dalawang-linggong practice plan para sa pinakamahinang bahagi.",
    mistake:
      "Kapag madali lang ang laging pinapraktis mo, nakatago ang mga puwang. Gumamit ng ebidensya sa pagpili ng susunod na hamon.",
    tips: "Mag-practice gamit ang bagong dataset para hindi mo lang kabisado ang lumang sagot. Itago ang unang bersyon at ang revision para maipakita ang pag-unlad.",
    why: "Ang tinutukang practice ang tumutugon sa kahinaang pinakamalamang na makaapekto sa totoong trabaho.",
  },
  "14-0": {
    example:
      "Ang fictional brief ay humihingi ng spreadsheet cleanup, vendor verification, at 15 oras na availability. Ipakita ang na-check na tracker, verification log, at totoong availability mo. Kung hindi ka pa nakatawag sa vendor, mag-alok ng may-label na role-play sample at ipaliwanag ang puwang.",
    exercise:
      "Gumawa ng requirement/evidence/gap table para sa imbentong research VA job. Mag-draft ng 120-word na application.",
    mistake:
      "Kapag binalewala mo ang maliit na tagubilin sa application, baka isipin ng client na pati tagubilin nila ay mapapalampas mo.",
    tips: "Gumawa ng requirement/evidence/gap table bago isulat ang proposal. Piliin ang pinakaangkop na sample sa halip na ipadala ang buong portfolio.",
    why: "Ginagawang masusuri ng sample ang tunay mong skill at proseso ng verification.",
  },
  "14-1": {
    example:
      '"Natanggap po. Maiche-check ko ang 20 records bago mag-2 PM sa oras ninyo. May dalawang address na kulang; ifa-flag ko ito at maghahanda ako ng clarification drafts. Paki-confirm kung puwede kong ipadala ang mga draft." Alam ng client ang plano at ang desisyong kailangan.',
    exercise:
      "Sumulat ng kickoff acknowledgment, mid-task na blocker update, at final delivery note para sa fictional na tracker cleanup.",
    mistake:
      "Ang katahimikan ay puwedeng magparamdam na hindi maaasahan ang tumpak na trabaho. Makipag-usap ayon sa kasunduan.",
    tips: "Gamitin nang pare-pareho ang received / in progress / waiting / delivered. Kilalanin ang request nang hindi nangangako ng hindi makatotohanang deadline.",
    why: "Ang tiyak na context ay nagbibigay sa client ng desisyong magagawa.",
  },
  "14-2": {
    example:
      '"Puwede po bang i-confirm kung kasama na sa quoted total ang delivery? Uulitin ko po ang detalye: 100 ang total, delivery Friday bago mag-noon, depende sa stock confirmation. Tama po ba? Puwede po bang ipadala ang terms nang nakasulat?" Nananatiling tahasan ang kawalang-katiyakan.',
    exercise:
      "Mag-role-play ng dalawang vendor call kasama ang kaibigan o basahin nang malakas ang dalawang papel. Isama ang isang hindi malinaw na presyo at isang hindi kumpirmadong delivery date.",
    mistake:
      "Mas mahalaga ang pagtatala ng tamang sagot kaysa sa mabilis na pagsasalita. Magdahan-dahan sa mahahalagang detalye.",
    tips: 'Magsanay ng kalmadong pariralang "Puwede po bang ulitin ang total?" Isulat ang notes agad pagkatapos ng call habang sariwa pa ang detalye.',
    why: "Ang paglilinaw ay pumipigil sa maling halaga na pumasok sa desisyon ng client.",
  },
  "14-3": {
    example:
      "Sabi ng fictional AI draft ay garantisadong darating bukas ang delayed na order. Ang source ay nagsasabi lang na chine-check ng delivery team. Alisin ang garantiya, sabihin ang na-verify na status, at magbigay ng awtorisadong oras ng follow-up.",
    exercise:
      "I-audit ang dalawang AI-generated na fictional support reply: isang may imbentong garantiya at isang walang follow-up. Itama ang dalawa at ipaliwanag ang bawat edit.",
    mistake:
      "Puwedeng kailanganin pa rin ng malaking pagtatama ang mabilis na draft. Sukatin ang buong trabaho, hindi lang ang bilis ng paggawa ng draft.",
    tips: "Sukatin ang oras ng review pati ang oras ng pag-draft. Itanong ang AI policy ng client bago gumamit ng sensitibong input.",
    why: "Ang buong workflow ang nagpapasya kung talagang nakakatulong ang tool.",
  },
  "14-4": {
    example:
      "May client na gumagamit ng CRM na hindi mo pa kilala. Mag-practice ka sa pag-create ng fictional contact sa aprubadong sandbox, i-verify ang required fields, at idokumento ang mga hakbang. Huwag mag-import ng buong customer list o magbago ng permissions bilang unang eksperimento.",
    exercise:
      "Sumulat ng learning plan para sa fictional na CRM task: required fields, access, practice case, acceptance checks, at escalation.",
    mistake:
      "Ang pag-aaral sa pamamagitan ng eksperimento sa live na data ay puwedeng magbigay ng cleanup na trabaho sa client.",
    tips: "Idokumento ang isang kumpletong task sa halip na subukan ang bawat feature. Linawin kung aling aksyon ang hindi na mababawi bago mag-practice.",
    why: "Ang kontroladong practice case ay nakakabawas ng panganib habang nagkakaroon ka ng kakayahan.",
  },
  "14-5": {
    example:
      "Practice trial: linisin ang sampung imbentong order, mag-draft ng dalawang support reply, at sumulat ng handoff. May isang amount na hindi alam at isang refund na kailangan ng approval ng owner. Ang matibay na submission ay nagfa-flag ng pareho sa halip na mag-imbento ng value o mag-awtorisa ng refund.",
    exercise:
      "Tapusin ang 60-minutong practice trial: sampung order record, dalawang reply, exception log, at delivery email. I-score ang katumpakan, pagkakumpleto, komunikasyon, at awtoridad/privacy mula 0–2. Itama ang anumang zero bago ipakita.",
    mistake:
      "Hindi napapalitan ng bilis ang imbentong facts o hindi awtorisadong pangako.",
    tips: "Maglagay ng isang talatang handoff na may mga tapos at hindi pa nareresolba. Gawin ang huling check ng recipient, attachment, at permission bago i-deliver.",
    why: "Kailangan ng reviewer ng kitang-kitang exceptions at tapat na ulat kung ano ang kumpleto.",
  },
  "15-0": {
    example:
      "Ang fictional brief ay naghahanap ng mga bakery sa Area A na tumatanggap ng online orders. Pasok ang Oak Bakery sa dalawang kondisyon; ang Pine Bakery ay nasa Area B; ang Elm Bakery ay nasa Area A pero hindi alam ang paraan ng pag-order. Qualified ang Oak, excluded ang Pine, at kailangang i-review ang Elm. Hindi pareho ang hindi alam at ang hindi.",
    exercise:
      "Gamit ang fictional na data sa ibaba, gumawa ng limang-row na tracker, ilapat ang qualification rules, at sumulat ng handoff na wala pang 120 words. Huwag kontakin ang totoong negosyo.",
    mistake:
      "Kapag hinulaan mo ang kulang na facts para lang mapunan ang quota ng listahan, nagiging mahirap pagkatiwalaan ang listahan.",
    tips: "Isulat ang qualification rules bago maghanap para pare-pareho ang desisyon mo. I-review ang bawat record na malapit sa hangganan sa halip na pilitin ang oo o hindi.",
    why: "Pinapanatili ng review status ang kawalang-katiyakan at sinasabi sa client kung ano ang kailangang i-verify.",
  },
});
