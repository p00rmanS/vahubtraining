// Taglish companions, part 11 (chapter 34, advanced simulations).
Object.assign(taglishExtra, {
  "33-0": {
    example:
      "Sa 9 AM, naglista ang fictional na VA ng limang task na 270 minuto ang kabuuan sa 8-oras na araw, kasama ang 96-minutong buffer. Sa 2 PM, humingi ang may-ari ng cafe ng 120-minutong research brief bago matapos ang araw. Kinuwenta ng VA na lalampas ang 390 minuto ng trabaho at ang buffer sa araw, kaya nag-alok ng dalawang opsyon at pinili ng owner ang delivery bukas ng umaga. Nagpadala pa rin ang VA ng malinaw na end-of-day update sa dalawang client.",
    exercise:
      "Planuhin ang practice na araw: kuwentahin ang minuto, idagdag ang buffer, i-block ang iskedyul, at isulat ang sagot sa request ng 2 PM at ang end-of-day update para sa isang client.",
    mistake:
      "Ang pagtanggap sa bagong request nang hindi ito ina-estimate ay tahimik na sumisira sa mga naunang pangako.",
    tips: 'I-estimate nang malakas ang bagong request kasama ang review bago mag-oo; isang minuto lang ito at nakakaiwas sa puyatan. Magtago ng "hindi ngayon" na listahan para hindi mawala ang ipinagpaliban.',
    why: "Ihambing ang request sa totoong capacity, tapos hayaang pumili ang client mula sa tapat na opsyon sa halip na mangako nang sobra.",
  },
  "33-1": {
    example:
      "Sa 10 AM, tatlong bagay ang sabay-sabay na nangyari sa fictional na bakery: nagpadala ang VA ng order list na may phone numbers sa maling tao, nag-post ang customer ng reklamo sa publiko tungkol sa late na order, at gumawa ang automation ng labindalawang dobleng reminder draft na hindi pa naipapadala. Inuna ng VA ang privacy incident, pinahinto ang automation pangalawa, at sinagot ang reklamo pangatlo. Pagsapit ng 11 AM, nasa owner na ang incident report, patay na ang automation, at may kalmadong sagot na ang customer.",
    exercise:
      "I-rank ang tatlong practice na problema na may dahilan, isulat ang mensahe sa owner para sa insidente, ang holding reply sa customer, at ang unang hakbang ng containment para sa automation.",
    mistake:
      "Ang pagsagot muna sa pinakamaingay na reklamo ay puwedeng mag-iwan ng data exposure na hindi pa naiuulat habang lumalala.",
    tips: "Isulat ang ranggo at dahilan bago kumilos; kapag nai-stress, ang unang maingay ang nananalo kung hindi ka magpapasya muna. Magpadala sa owner ng isang-linyang paunang abiso bago ang buong report.",
    why: "Mas mataas ang pinsala sa tao at data kaysa sa ingay. I-report at i-contain muna ang exposure, tapos asikasuhin ang reklamo ng kalmadong holding reply.",
  },
  "33-2": {
    example:
      "May tatlong client ang fictional na VA. Ang Client A ay may 8-oras na retainer sa 14 kada oras at 9.5 oras ang tracked, kaya ang 1.5 oras na sobra ay kailangan ng approval. Ang Client B ay may 150 na package na may isang report na hindi pa naihahatid. Ang Client C ay hourly sa 12 na may 6.25 oras. Ininvoice ng VA ang C ng 75, hiniling kay A na aprubahan ang 21 na overage, at sinabihan si B na lalabas ang invoice kapag naihatid ang ikaapat na report.",
    exercise:
      "Kuwentahin ang invoice ng bawat client mula sa practice data, isulat ang hiling ng approval sa overage, i-flag ang conflict sa capacity, at itala kung ano ang hindi mo muna iinvoice.",
    mistake:
      "Ang pagsingil ng overage nang walang approval, o pag-invoice ng hindi pa naihahatid, ay nagdudulot ng away.",
    tips: "Suriin nang dalawang beses ang recipient at pangalan ng attachment kapag sunod-sunod ang pagpapadala ng invoice sa iba't ibang client. Magtago ng month-end template kada client para pareho ang hakbang tuwing buwan.",
    why: "Dapat aprubado ang overage para hindi magulat ang client at may tala ka ng pahintulot.",
  },
  "33-3": {
    example:
      "Kailangan ng fictional na VA ng 800 kada buwan, gumagastos ng 60 sa tools, at kayang mag-bill ng mga 60 oras pero 15 porsiyento ang nawawala sa admin at pagitan ng client. Ang magagamit na billable hours ay 51, kaya ang floor ay 860 na hinati sa 51, mga 17 kada oras. Nagtakda ang VA ng target na 20 kada oras at presyo ng package na hindi bababa sa floor.",
    exercise:
      "Isulat ang isang-pahinang plano gamit ang sarili mong numero o ang practice na numero: serbisyo, kuwenta ng rate, mga alok, lingguhang gawain, sistema, safety net, at layunin.",
    mistake:
      "Ang pagtatakda ng rate sa pagkopya ng numero ng iba nang hindi kinukuwenta ang sarili mong gastos ay puwedeng mag-iwan sa iyo sa sahod na hindi sapat.",
    tips: "Itago ang minimum rate at ipakita lang ang target; makipagtawaran hanggang minimum lang, huwag lalampas pababa. Isulat ang isang bagay na tatanggihan mo, tulad ng unpaid trial; mas madaling panindigan kung napagpasyahan na nang maaga.",
    why: "Ang sarili mong gastos at totoong billable hours ang nagbibigay ng matatag na floor; tinutulungan ng datos ng merkado na magtakda ng target na mas mataas dito.",
  },
});
