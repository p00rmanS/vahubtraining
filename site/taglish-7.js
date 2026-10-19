// Taglish companions, part 7 (chapter 27).
Object.assign(taglishExtra, {
  "26-0": {
    example:
      'Ang inbox ng fictional bakery ay may 60 mensahe kada araw. Gumawa ang VA ng labels, nagdagdag ng filters para sa supplier newsletter at resibo, at tinest ang bawat isa sa sampung lumang mensahe. May isang filter na makakaitim sana ng refund request dahil may salitang "receipt", kaya ginawa itong tiyak sa address ng nagpadala. Sumulat din ang VA ng dalawang saved reply para sa pickup questions at ipina-approve ito.',
    exercise:
      "Magdisenyo ng label set at tatlong filter para sa practice inbox. Sa bawat filter, pangalanan ang mensaheng hindi dapat mahuli nito at ipaliwanag ang test na gagawin mo muna.",
    mistake:
      "Ang filter na nakabase sa karaniwang salita ay puwedeng tahimik na magtago ng urgent na mensahe mula sa customer.",
    tips: 'Mag-filter ayon sa address ng nagpadala sa halip na karaniwang salita kapag kaya. Magtago ng isang "Needs decision" na label at isama ito sa daily summary ng client.',
    why: "Dapat tiyak at maaasahan ang tinatapatan ng filter, tulad ng sender, at dapat i-test para walang importanteng mail na maitago.",
  },
  "26-1": {
    example:
      "Na-double-book ang fictional na consultant dahil hindi nabasa ng booking link ang pangalawang calendar. Ikinonekta ng VA ang dalawang calendar, nagdagdag ng 15-minutong buffer at limitasyong tatlong tawag kada araw, nagtakda ng 24-oras na notice, at tinest ang link mula sa ibang time zone. Bumaba ang no-show nang magdagdag ng reminder isang araw bago.",
    exercise:
      "Isulat ang booking setup para sa dalawang uri ng meeting sa practice case, kasama ang buffers, limitasyon, minimum notice, reminders, at mga test na gagawin mo.",
    mistake:
      "Ang pag-iwan ng pangalawang calendar na hindi nakakonekta ay nagdudulot ng double-booking na nakakahiya sa client.",
    tips: "Mag-book ng test meeting sa sarili mong link bago ito ibahagi ng client. Ipadala ang reminder na may reschedule link para mas madali ang pagbabago kaysa sa no-show.",
    why: "Pinipigilan ng pagte-test sa iba't ibang time zone ang kalituhan at namiss na meeting, kaya dapat tama ang lokal na oras sa dalawang confirmation.",
  },
  "26-2": {
    example:
      "May fictional na client na nagpadala ng login sa chat. Magalang na sumagot ang VA na hindi dapat idaan sa chat ang password, hiniling sa owner na ibahagi ito sa password manager na view access, at itinala sa access register na may end date. Nang matapos ang proyekto, inalis ng owner ang access at kinumpirma ito ng VA.",
    exercise:
      "Sumulat ng access request message para sa practice accounts at access register na may hindi bababa sa apat na row, kasama ang levels at end dates.",
    mistake:
      "Ang pag-iwan ng credentials sa chat o shared document ay madaling mag-leak at mahirap alisin.",
    tips: "Mag-alok ng isang-linyang access request template para mabilis makasagot ng oo ang client. Suriin ang access register sa katapusan ng bawat buwan at humingi ng pag-alis ng hindi mo na kailangan.",
    why: "Ang password sa chat ay nakikita at nai-store sa maraming lugar. Mas ligtas at traceable ang shared vault, at dapat palitan ang naipadalang password.",
  },
  "26-3": {
    example:
      "Kailangan ng fictional bakery ng gabay sa pag-update ng pickup times sa order form. Sumulat ang VA ng anim na bullet, tinakpan ang customer data, at nag-record ng tatlong-minutong video. Sinundan ito ng bagong helper at natigil sa isang setting, kaya nag-record muli ang VA ng bahaging iyon at nagdagdag ng nakasulat na buod.",
    exercise:
      "Isulat ang script, plano sa pagtatakip ng data, at nakasulat na buod para sa tatlong-minutong recording ng practice task, at ilista ang test na gagawin mo sa bagong tao.",
    mistake:
      "Ang pag-record na may totoong customer data sa screen ay naglalantad ng pribadong impormasyon sa file na puwedeng maibahagi sa marami.",
    tips: 'Isulat ang "ganito ang itsura ng tapos" sa dulo ng script at ipakita ito sa screen. Ilagay ang petsa ng recording sa pamagat para alam ng tao kung kailan ito puwedeng luma na.',
    why: "Ang private na data sa recording ay puwedeng kumalat lampas sa dapat na audience, kaya mag-record muli gamit ang tinakpan o fictional na data.",
  },
  "26-4": {
    example:
      "Kailangang dumalo ng fictional na founder sa meeting sa ibang lungsod sa Tuesday 10 AM. Nagharap ang VA ng dalawang flight option: ang isa ay mas mura pero 35-minutong connection lang, ang isa ay bahagyang mas mahal pero mas ligtas ang connection. Pinili ng founder ang mas ligtas. Naglista ang VA ng hotel, transport, at backup na train plan, at nag-confirm isang araw bago.",
    exercise:
      "Maghanda ng itinerary at paghahambing ng dalawang opsyon para sa practice trip, na may contingency plan at listahan ng mga bagay na vi-verify mo sa opisyal na source.",
    mistake:
      "Ang pagbook ng napakahigpit na connection para makatipid ay puwedeng mas magastos kung hindi maabutan ng biyahero ang meeting.",
    tips: "Isulat ang bawat oras kasama ang time zone, lalo na sa mga flight na tumatawid ng petsa. Magtago ng kopya ng itinerary at mahahalagang contact offline kung mahina ang signal.",
    why: "Ang biyahero o client ang nagpapasya sa tradeoff ng gastos at risk. Magharap ng malinaw na opsyon at mag-book lang pagkatapos ng approval.",
  },
});
