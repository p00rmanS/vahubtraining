// Taglish companions, part 10 (chapters 32 and 33).
Object.assign(taglishExtra, {
  "31-0": {
    example:
      "Pinakumpara ng VA sa AI tool ang tatlong fictional na packaging supplier. Ang sagot ay naglista ng presyo para sa supplier B na masyadong maganda. Binuksan ng VA ang page ng supplier at nakitang ang presyo ay para sa 1,000 units, hindi 100. Ang final table ay nagpapakita ng na-verify na presyo, link, at petsa ng pag-check, at minarkahang unverified ang delivery time ng supplier C.",
    exercise:
      "Kunin ang practice na sagot ng AI, i-verify ang bawat claim laban sa practice sources, itama ang mali, at gumawa ng maikling comparison table na may source at status na column.",
    mistake:
      "Ang pagkopya ng link o numerong galing sa AI nang hindi binubuksan ay puwedeng maglagay ng imbentong source sa harap ng client.",
    tips: "Utusan ang AI na banggitin ang eksaktong pangungusap na pinagbabatayan nito, tapos hanapin mo ito mismo. Lagyan ng petsa ang bawat research table; nagbabago nang walang babala ang presyo at patakaran.",
    why: "Ang claim lang na nacheck mo sa source ang research. Kung hindi, lagyan ng label na unverified.",
  },
  "31-1": {
    example:
      'Sabi ng AI summary ng fictional na meeting ng bakery: "Maglulunsad si Maya ng menu sa Saturday." Sa recording, sinabi niya: "Baka mag-launch tayo ng Saturday kung dumating ang photos." Ginawang conditional ng VA ang minutes na ang photos ay dependency at ipinadala sa owner para sa approval.',
    exercise:
      "I-review ang practice na AI summary laban sa practice transcript, itama ito, at sumulat ng final minutes na may desisyon, action, at bukas na tanong.",
    mistake:
      'Ang pagtitiwala sa AI summary na ginagawang desisyon ang "baka" ay puwedeng magpagawa sa mga tao ng maling bagay.',
    tips: "Basahin nang malakas ang mga desisyon at owner sa dulo ng meeting para kumpirmado ito ng recording. Magtago ng glossary ng pangalan at termino para bumaba ang maling pagkarinig ng tool.",
    why: "Itinatala ng minutes ang aktuwal na napagpasyahan. Ang hindi malinaw na owner ay nasa bukas na tanong hanggang may kumpirmasyon.",
  },
  "31-2": {
    example:
      'Nagmungkahi ang AI ng =SUMIF(B:B,"Paid",C:C) para sa totals, pero ang status column ay may "paid" at "Paid " na may dagdag na espasyo. Ipinakita ng test sample ng VA ang total na 60 sa halip na inaasahang 75. Pagkatapos i-trim ang statuses, 75 na ang lumabas sa formula at tugma ang manual sum.',
    exercise:
      "Gamitin ang practice na AI formula sa sample data, hanapin kung saan ito pumapalya, ayusin ang data o formula, at sumulat ng maikling tala kung ano ang tinest mo.",
    mistake:
      "Ang pag-paste ng AI formula sa buong sheet ng client nang walang test ay puwedeng tahimik na magbigay ng maling total.",
    tips: 'Mag-test gamit ang row na dapat sumira sa formula; kung walang nasira, masyadong banayad ang test. Magtago ng "tested formulas" na tab na magagamit mo sa iba\'t ibang client gamit ang fictional na halimbawa.',
    why: "Ang pagkakaiba ng dalawang paraan ay senyales ng problema sa data o formula na dapat unawain at ayusin muna.",
  },
  "31-3": {
    example:
      'Tinanong ng may-ari ng fictional na bakery, "Gumagamit ka ba ng AI?" Nagpadala ang VA ng kalahating pahinang patakaran: AI ay ginagamit sa pag-draft at tulong sa formula; walang customer data na ipinapasok; chine-check ang bawat fact bago mag-deliver; at puwedeng patayin ng owner ang AI sa anumang task. Inaprubahan ito ng owner at humiling ng AI-drafted na sagot para sa karaniwang pickup questions lang.',
    exercise:
      "Sumulat ng kalahating pahinang AI-use policy para sa practice mo, at maikling mensahe na nag-aalok nito sa bagong client at humihingi ng kanilang kagustuhan.",
    mistake:
      "Ang tahimik na paggamit ng AI sa sensitibong materyal, o pag-angkin na ganap na manual ang trabaho kahit hindi, ay puwedeng sumira ng tiwala.",
    tips: "Ilagay ang link ng policy sa onboarding pack para nasagot na ang tanong bago itanong. Itala ang kagustuhan ng bawat client sa AI sa isang-pahinang profile nila at basahin muli bago magsimula.",
    why: "Ang client ang nagtatakda ng patakaran para sa data at komunikasyon nila. Igalang ang utos at itala ito.",
  },
  "32-0": {
    example:
      'Sinasabi ng draft ng fictional na blog post ng bakery: "Ang cookies namin ang pinakamalusog sa bayan." Sa fact-check stage, walang nakitang ebidensya. Inalis ng VA ang claim, pinalitan ng na-verify na fact na oats ang gamit sa recipe, nagdagdag ng licensed na larawan na may alt text, at ipinadala ang post para sa approval bago i-schedule.',
    exercise:
      "Ipasa ang practice na draft sa pipeline: ilista ang mga problemang nakita sa bawat yugto, isulat muli ang isang claim, at isulat ang approval request.",
    mistake:
      "Kapag pinagsama ang pag-edit at fact-check, puwedeng itago ng kumpiyansang pananalita ang mga claim na walang ebidensya.",
    tips: "Isulat ang source sa tabi ng bawat claim sa draft; burahin lang ang mga tala pagkatapos ng approval. Basahin ang na-publish na post sa phone bago sabihin sa client na live na ito.",
    why: "Ang mga claim na walang ebidensya ay dapat alisin o palitan ng facts na kayang i-verify.",
  },
  "32-1": {
    example:
      'Ang pickup page ng fictional na bakery ay may title na "Page 2" at walang description. Binago ng VA ang title sa "Cookie Box Pickup in Harbor Town | Sunrise Bakery", sumulat ng malinaw na description na may pickup window, nagdagdag ng alt text sa larawan, at itinama ang oras na magkaiba sa listing. Itinala ng VA ang petsa at tiningnan ang visits pagkalipas ng isang buwan.',
    exercise:
      "Isulat muli ang title, description, at heading ng practice page, ayusin ang isang alt text at isang link, at ilista ang mga hindi pare-parehong detalye ng negosyo.",
    mistake:
      "Ang paulit-ulit na keyword ay nagpapapangit ng content at puwedeng magpaparusa sa site.",
    tips: "Hanapin mo mismo ang target mong mga salita at basahin kung ano ang sinasagot ng top results. Lagyan ng petsa ang bawat pagbabago para masubaybayan ang sanhi ng pagtaas o pagbaba.",
    why: "Walang nakokontrol ang ranggo sa search. Ang tapat na pagpapabuti at pagsubaybay ang maaasahang paraan.",
  },
  "32-2": {
    example:
      "Gusto ng fictional na bakery na i-update ang oras ng Saturday pickup. Kinumpirma ng VA ang hiling nang nakasulat, tiniyak na may backup, in-edit ang draft page, at nagpadala ng preview screenshot. Pagkatapos ng approval, nag-publish ang VA, chineck ang live page sa phone, at itinala ang pagbabago. Isang sirang button sa form ang nakita sa preview at naayos bago mag-publish.",
    exercise:
      "Isulat ang change plan para sa practice update: access level, backup check, mga hakbang, test, approval message, at rollback plan.",
    mistake:
      "Ang pag-edit ng live page nang walang backup o preview ay puwedeng makasira nito nang walang madaling paraan ng pagbawi.",
    tips: 'Kumuha ng "before" na screenshot ng bawat page na ie-edit mo; ito ang pinakamabilis na patunay ng nabago. I-check ang live page sa phone, dahil doon ito makikita ng karamihan.',
    why: "Ang pag-restore ng kilalang maayos na bersyon ay naglilimita ng pinsala. Ang eksperimento sa live na site ay nagpapalala ng problema.",
  },
  "32-3": {
    example:
      "Sa buwanang audit ng site ng fictional na bakery, nakita ang lumang holiday banner na naka-link pa sa tinanggal na page, link sa menu na may error, at form na walang confirmation. Nag-ulat ang VA ng tatlong isyu na may screenshot at prayoridad, inayos ang banner sa approval ng owner, at hiniling sa web developer na asikasuhin ang form.",
    exercise:
      "I-audit ang practice na listahan ng page, itala ang mga isyu na may prayoridad at mungkahing owner, at isulat ang maikling ulat sa client.",
    mistake:
      "Kapag awtomatikong checker lang ang pinagkakatiwalaan, nakakaligtaan ang problemang nakikita ng tao at may mga maling alarma pa.",
    tips: 'Magtago ng maikling listahan ng mga page na "hindi dapat masira" at unahin silang i-check kada buwan. Maglakip ng isang screenshot kada isyu para hindi manghula ang aayos.',
    why: "Puwedeng magkamali ang tool. I-verify nang mano-mano at iulat lang ang kumpirmadong isyu para manatiling kapani-paniwala ang ulat mo.",
  },
});
