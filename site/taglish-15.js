// Taglish companions, part 15 (chapter 46).
Object.assign(taglishExtra, {
  "45-0": {
    example:
      "Kailangan ng fictional na bakery ng label printer at budget na 300 dollars sa loob ng dalawang linggo. Humingi ang VA ng quote sa tatlong supplier gamit ang parehong nakasulat na requirements. Ang isang printer na 99 lang ay may label na 25 kada buwan, kaya sa loob ng isang taon ito ang pinakamahal. Gumawa siya ng table ng kabuuang gastos sa unang taon, tinandaan na mag-e-expire ang isang quote sa Biyernes, at nagpadala sa owner ng kalahating-pahinang buod na may dalawang opsyon at isang tanong tungkol sa warranty. Inaprubahan ng owner ang isa at ini-file ng VA ang mga quote kasama ang approval.",
    exercise:
      "Ihambing ang tatlong practice na quote sa table ng buong gastos sa isang taon, sumulat ng kalahating-pahinang neutral na buod, at ihanda ang purchase request.",
    mistake:
      "Ang paghahambing ng headline price lang ay puwedeng magtago ng fees, shipping, at renewal cost na magbabago sa pinakamurang opsyon.",
    tips: 'Magdagdag ng column na "cost in year one" at i-sort dito; madalas nitong binabago ang inaasahan mong ayos. Itanong sa bawat vendor ang parehong tatlong tanong nang nakasulat, kasama kung ano ang mangyayari sa renewal.',
    why: "Ang patas na paghahambing ay binibilang ang lahat ng gastos at saklaw sa parehong panahon, para makapagpasya ang approver nang may buong larawan.",
  },
  "45-1": {
    example:
      "Ang fictional na bakery ay may dalawang scheduling tool at isang stock-photo plan na hindi nagamit sa loob ng anim na buwan. Gumawa ang VA ng listahan mula sa statement at resibo, nakita ang duplicate, at napansing magre-renew ang photo plan sa 25 araw sa halagang 190 dollars. Nagpadala siya sa owner ng isang-pahinang buod. Sinabi ng owner na i-cancel ang photo plan; ini-export muna ng VA ang mga download, nag-cancel sa account ng owner, sine-save ang confirmation, at itinala ang natipid na 190 kada taon.",
    exercise:
      "I-audit ang practice na listahan: itala ang mga field, i-flag ang duplicate at paparating na renewal, isulat ang buod para sa owner, at planuhin ang isang ligtas na cancellation.",
    mistake:
      "Ang pag-cancel ng tool nang hindi chine-check kung sino ang gumagamit o hindi ine-export ang data ay puwedeng magbura ng records o mag-lock out sa team.",
    tips: 'Maglagay ng column na "last used"; ang tool na walang gamit sa siyamnapung araw ang pinakamalakas na kandidatong kuwestiyunin. Gumawa ng paalala para sa deadline ng cancellation, hindi lang sa petsa ng renewal; maraming plan ang nangangailangan ng abiso bago ang singil.',
    why: "Ilabas ang natuklasan na may petsa at halaga, saka kumilos ayon sa nakasulat na desisyon ng owner pagkatapos protektahan ang data.",
  },
  "45-2": {
    example:
      "Gumagamit ang fictional na bakery ng mga 20 kahon kada linggo at 7 araw ang lead time ng supplier. Itinakda ng VA ang reorder point sa 30 kahon kasama ang 10 kahong buffer. Sa buwanang bilang tuwing Biyernes, 55 ang sabi ng sheet pero 38 ang nasa shelf, kaya itinala niya ang 17 kahong pagkakaiba bilang hindi maipaliwanag at hindi niya binago ang kasaysayan. Nagpadala siya sa owner ng reorder list na may mungkahing dami at link ng vendor, at inaprubahan ito ng owner.",
    exercise:
      "Buuin ang practice na inventory sheet, magtakda ng reorder point gamit ang formula, mag-log ng pagkakaiba sa bilang, at isulat ang reorder list.",
    mistake:
      "Ang pagbabago ng bilang para tumugma sa sheet ay nagtatago ng pagkalugi at pagkasira na dapat malaman ng owner.",
    tips: 'Kunan ng litrato ang shelf tuwing magbibilang at i-save na may petsa; nagbibigay ito ng sagot kung ano talaga ang naroon. Magdagdag ng column na "why it matters" para sa kritikal na item; mas mabilis ito mag-aprub ng owner kaysa sa numero lang.',
    why: "Impormasyon ang pagkakaiba sa bilang. Pinananatiling tapat ng pagtatala ang kasaysayan at natutulungan ang owner na hanapin ang sanhi tulad ng pagkasira o pagnanakaw.",
  },
});
