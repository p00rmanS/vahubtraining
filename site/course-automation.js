/** AI and no-code automation for VAs. Append IDs to preserve existing progress. */
const automationLessons = [
  {
    title: "Map a process before you automate it",
    goal: "Describe a repeated task precisely enough to decide whether automation is safe and worthwhile.",
    prereq: "SOPs, automation basics, and AI workflow lessons.",
    teach:
      "Automation repeats whatever you give it, including mistakes, so the first job is understanding the manual process. Write down the trigger that starts the task, the inputs it needs, each step in order, the decisions along the way, the output, and the person who owns the result. Then list the exceptions: missing data, duplicates, unusual requests, and anything that needs a human judgment or approval. Measure the task honestly: how often it happens, how long it takes, and how many errors occur. A task is a good automation candidate when it is frequent, rule-based, low risk, and has clear inputs. A task is a poor candidate when it needs judgment, involves sensitive decisions such as refunds or legal commitments, or changes often. Decide what stays manual and where a person must approve. Estimate the benefit against the time to build, test, and maintain. Automating a broken process only makes mistakes faster, so fix the process first. Keep the map as a one-page document because it becomes the specification for the build and the SOP for the fallback when the automation fails.",
    example:
      "The fictional bakery owner wants every new order form entry copied into the order sheet and a confirmation drafted. The VA maps the trigger, the fields, and the exceptions: missing pickup time, duplicate entries, and orders above 50 items that need owner approval. The map shows that copying is safe to automate but sending confirmations is not until the owner approves the template.",
    steps: [
      "Name the trigger, inputs, and output of the task.",
      "List every step and decision in order, including who owns each.",
      "Write the exceptions and mark which need a person's judgment or approval.",
      "Measure frequency, time, and error rate, and estimate build and upkeep time.",
      "Decide what to automate, what stays manual, and what the fallback is.",
    ],
    exercise:
      "Map the practice process on one page: trigger, inputs, steps, exceptions, approvals, and measures. Then write a recommendation of what to automate now, what to keep manual, and why.",
    portfolio: "A one-page process map with an automation recommendation.",
    mistake:
      "Automating a messy process without mapping exceptions spreads errors faster and hides them.",
    question: "Which task is the best first automation candidate?",
    options: [
      "Approving refunds based on the situation",
      "Copying form entries with fixed fields into a sheet and flagging blanks",
      "Deciding whether a complaint is serious",
    ],
    answer: 1,
    explanation:
      "Frequent, rule-based, low-risk tasks with clear inputs are safest to automate. Judgment and approvals stay with people.",
    ready: [
      "Map trigger, steps, and output",
      "List exceptions and approvals",
      "Measure before deciding",
      "Choose what to keep manual",
    ],
    tools: "Docs or a whiteboard tool; a spreadsheet for measurements.",
    taglish:
      "Bago mag-automate, unawain muna ang manual process: trigger, inputs, mga hakbang, desisyon, at output. Isulat ang mga exceptions tulad ng kulang na data at duplicate, at alamin kung alin ang kailangan ng tao at approval. Piliin lang i-automate ang madalas, rule-based, at mababa ang risk. Huwag i-automate ang sirang proseso, dahil mas mabilis lang kumalat ang mali.",
    proTips: [
      "Run the manual process on five real examples before you design the automation.",
      "Write the fallback steps now; you will need them the first time the tool fails.",
    ],
    deepDive: [
      [
        "Find the real exceptions",
        "Look at the last twenty cases and note which ones did not fit the normal path. Ask the client or team what usually goes wrong. Exceptions are where automations break, so each needs a rule: skip, flag, or send to a person.",
      ],
      [
        "Decide with numbers",
        "A task that takes five minutes once a week rarely justifies a build. A task done fifty times a month with frequent small errors may. Include maintenance time, because tools and forms change.",
      ],
    ],
    practiceData:
      "Fictional process: New order form entry arrives (about 30 a week). VA copies name, items, pickup day, and pickup time into the sheet (3 min each) and drafts a confirmation (4 min each). Problems last month: 6 entries missing pickup time, 4 duplicates, 3 orders over 50 items needing owner approval, 1 refund request inside an order note.",
    modelAnswer:
      "Automate the copy into the sheet with required-field checks and a duplicate check, since fields are fixed and risk is low. Flag entries missing pickup time, entries over 50 items, and any note mentioning a refund for a person. Keep confirmation sending manual or approval-gated until the owner approves the template. Savings are about 3 minutes times 30, or 90 minutes a week. The map also records the fallback of manual entry.",
  },
  {
    title: "Build and test a no-code automation safely",
    goal: "Create a simple automation with test data, error handling, and an off switch.",
    prereq: "Process mapping, data validation, and privacy lessons.",
    teach:
      "No-code tools connect apps with a trigger, optional conditions, and actions. A basic automation might say: when a form is submitted, add a row to a sheet, then notify a person. Build it in a safe order. Start with a copy of the sheet and fake data so mistakes touch nothing real. Add one step at a time and run a test after each step. Test the normal case and the exceptions from your process map: blank fields, duplicates, very long text, and special characters. Use filters or conditions so only qualifying records continue, and send uncertain cases to a person instead of guessing. Add an alert for failures so a broken run does not stay hidden. Name every automation and step clearly, store the owner and purpose in a note, and keep a way to switch it off quickly. Use the minimum permissions the connection needs. Never put passwords or secret keys into step descriptions or shared notes. Before you go live, run a small pilot with the client watching, compare outputs with the manual result, and agree on rollback. After launch, check run history for the first week and fix issues before relying on it. Document what it does and who to call when it fails.",
    example:
      "The VA builds a fictional automation that copies new bakery form entries into a test sheet. The tests catch a blank pickup time, which the automation now sends to a review tab instead of the order sheet. After a three-day pilot where results match manual entry, the owner approves it and the VA adds a failure alert.",
    steps: [
      "Copy the destination and use fake data for the first build.",
      "Add trigger and actions one at a time and test after each step.",
      "Test normal and exception cases: blanks, duplicates, long text, and special characters.",
      "Add conditions, a review path for uncertain cases, and a failure alert.",
      "Pilot with the client, compare with manual results, and record how to switch it off.",
    ],
    exercise:
      "Write a test plan for the practice automation with at least six test cases, the expected result for each, the failure alert, and the rollback steps.",
    portfolio:
      "A test plan and a short description of a safe automation pilot.",
    mistake:
      "Connecting a new automation straight to live data without testing can create duplicates or send wrong messages to real people.",
    question: "A test entry has no pickup time. What should the automation do?",
    options: [
      "Add it to the order sheet with a guess",
      "Delete it silently",
      "Send it to a review tab and alert a person",
    ],
    answer: 2,
    explanation:
      "Uncertain or incomplete data should go to a person. Guessing or deleting hides the problem.",
    ready: [
      "Build with copies and test data",
      "Test exceptions, not only normal cases",
      "Add alerts and an off switch",
      "Pilot, compare, and document",
    ],
    tools: "Zapier, Make, or Power Automate with a test spreadsheet.",
    taglish:
      "Sa no-code automation, gumamit muna ng kopya ng sheet at pekeng data. Magdagdag ng isang step bawat test. I-test ang normal at ang exceptions: blank, duplicate, mahabang text. Ipadala sa tao ang mga hindi sigurado sa halip na manghula. Maglagay ng alert kapag may failure at siguraduhing may paraan para patayin agad. Mag-pilot muna kasama ang client bago gamitin nang totoo.",
    proTips: [
      "Give each step a plain name such as 'Add order row' so run history is readable.",
      "Keep a test sheet with permanent edge cases you re-run after every change.",
    ],
    deepDive: [
      [
        "Design the test cases first",
        "Write a table of inputs and the result you expect before building. Include at least one blank, one duplicate, one very long entry, and one with symbols. The table doubles as documentation.",
      ],
      [
        "Plan for failure",
        "Decide who is notified when a run fails, how the failed record is retried, and what the manual fallback is. An automation without a failure plan creates silent gaps that are found weeks later.",
      ],
    ],
    practiceData:
      "Fictional automation: when a bakery order form is submitted, add a row to the order sheet and notify the VA. Fields: name, items, pickup day, pickup time, notes. Known risks: blank pickup time, duplicate submissions within one minute, notes with commas and emoji, items count above 50.",
    modelAnswer:
      "Test cases cover a normal entry, a blank pickup time sent to review, a duplicate within one minute skipped and logged, notes with commas and emoji stored intact, 51 items flagged for owner approval, a very long note truncated safely, and a failed connection that triggers an alert. Rollback is switching the automation off and returning to manual entry from the form responses.",
  },
  {
    title: "Control permissions, data, and secrets in connected tools",
    goal: "Connect apps with the least access needed and keep client data and credentials safe.",
    prereq: "Account security, privacy, and automation lessons.",
    teach:
      "Every connection between apps is a door. When you authorize an automation, you give it the power to read or change data, often as long as the connection exists. Apply least privilege: request the minimum scope, such as read access to one sheet rather than all files, and use a dedicated account or service role when the client allows it. Never use a personal account for client automations because the client loses control if you leave. Review the permissions screen before approving and refuse anything that seems broader than the task. Store credentials, API keys, and tokens only in the client's approved password manager or in the tool's secure connection settings; never in documents, chat, or step names. Treat any key as a password, rotate it if it may have leaked, and revoke connections you no longer use. Keep sensitive data out of automations unless needed, and avoid sending customer details to third-party AI or other services without client approval and a check of the tool's data terms. Log who owns each connection and when it was last reviewed. If you suspect exposure, stop the automation, tell the client, revoke access, and document what happened. Ask for written approval before connecting a new service. Remove your access when the work ends.",
    example:
      "The fictional bakery's VA is asked to connect the order sheet to a new AI drafting tool. The permission screen requests access to the whole Drive. The VA asks the owner to create a folder with only the needed sheet, connects the tool to that folder with read-only access, and avoids sending customer phone numbers to the tool at all.",
    steps: [
      "List what each automation needs to read or change and the minimum scope for it.",
      "Read the permission screen and decline broader access than necessary.",
      "Store credentials only in the client's approved secure place.",
      "Exclude sensitive fields and check the tool's data terms before sending data.",
      "Record owner and review date for each connection, and revoke unused ones.",
    ],
    exercise:
      "For the practice request, write the minimum permissions needed, list the data fields that must not be sent to the tool, and write a message asking the owner for a restricted folder and written approval.",
    portfolio:
      "A connected-tools register template and a permission request message.",
    mistake:
      "Granting full-drive access or pasting an API key into a shared note exposes far more than the task needs.",
    question:
      "A tool asks for access to all files to read one sheet. What is the best response?",
    options: [
      "Limit access to a folder containing only that sheet, with read-only permission if possible",
      "Approve it; it is easier",
      "Share your own password instead",
    ],
    answer: 0,
    explanation:
      "Least privilege limits damage if the tool or connection is compromised.",
    ready: [
      "Request minimum scopes",
      "Keep secrets in approved storage",
      "Exclude sensitive data from third-party tools",
      "Review and revoke connections",
    ],
    tools:
      "The client's password manager and each app's connection settings page.",
    taglish:
      "Bawat koneksyon ng apps ay parang pinto. Hingin lang ang pinakamaliit na access na kailangan, halimbawa read-only sa isang folder. Huwag gumamit ng personal account para sa client automations. Itabi ang passwords at API keys sa approved na password manager, hindi sa notes o chat. Huwag magpadala ng sensitibong customer data sa third-party tool nang walang approval. Alisin ang access kapag tapos na ang trabaho.",
    proTips: [
      "Ask the client to create a dedicated work folder so you never need broad access.",
      "Set a calendar reminder to review connections every quarter.",
    ],
    deepDive: [
      [
        "Read permission screens like contracts",
        "Look for words like 'delete', 'manage', and 'all files'. Compare each with the task. If you cannot explain why a permission is needed, decline and ask the client or the tool's documentation.",
      ],
      [
        "Respond to a suspected leak",
        "Stop the automation, tell the client immediately, revoke the connection, rotate the key, and write down what data may have been exposed and when. Let the client decide on any notices to others.",
      ],
    ],
    practiceData:
      "Fictional request: connect an AI drafting tool to the bakery order sheet to draft replies. The sheet has name, phone, items, pickup time, and notes. The tool's permission screen asks to see and edit all Drive files. The owner has not approved sharing customer phone numbers with outside tools.",
    modelAnswer:
      "Minimum permission is read-only access to one restricted folder holding a copy of the sheet. Phone numbers and any private notes must be removed or excluded from what the tool sees. The message asks the owner to create the folder, confirms no editing rights are given, records the tool's data terms for review, and requests written approval before connecting anything.",
  },
  {
    title: "Monitor, maintain, and hand over automations",
    goal: "Keep automations reliable over time with logs, change records, and clear handoffs.",
    prereq: "Automation building, SOP, and offboarding lessons.",
    teach:
      "An automation is not finished when it is switched on. Apps change fields, forms get new questions, and limits are reached, so automations need monitoring and care. Check run history on a schedule: at first daily, later weekly. Look for failed runs, skipped records, and unusual counts such as zero runs on a normal day. Set alerts for failures and for silence. Keep a change log that records what changed, why, who approved, and the date, because the cause of a new problem is often the last change. Use a version of the process in a test copy before changing a live one. Document each automation on one page: purpose, trigger, steps, owner, connected accounts, fallback, test cases, and known limits. Store the document where the client can reach it. When you leave a client or pass work to someone else, hand over access properly: list every automation and connection, transfer ownership to the client or successor, remove your personal access, and confirm that the fallback works without you. Report health in plain language: runs, failures, fixes, and anything you recommend. Retire automations that are no longer used because forgotten automations keep running with old permissions.",
    example:
      "The fictional bakery changes its order form by adding a 'gluten-free' question. The automation still runs, but the new answer goes nowhere. The weekly check shows the field is missing from the sheet. The VA updates the mapping in the test copy, runs the test cases, notes the change in the log, and tells the owner.",
    steps: [
      "Schedule run-history checks and set alerts for failures and silence.",
      "Record every change with date, reason, and approver.",
      "Test changes in a copy before touching the live automation.",
      "Write a one-page document for each automation and store it where the client can reach it.",
      "At handoff, transfer ownership, remove your access, and confirm the fallback works.",
    ],
    exercise:
      "Write the one-page documentation and a change-log entry for the practice automation, and list the handoff steps you would take when the engagement ends.",
    portfolio: "An automation documentation page and a change-log sample.",
    mistake:
      "Leaving automations unmonitored lets silent failures grow, and forgotten ones keep running with old permissions.",
    question:
      "The form gains a new field and orders still arrive. What is the likely risk?",
    options: [
      "None, because the automation still runs",
      "The automation will fix itself",
      "The new field may not be mapped, so data is silently lost",
    ],
    answer: 2,
    explanation:
      "Automations can keep running while silently dropping new data. Regular checks and change records catch this.",
    ready: [
      "Check run history and set alerts",
      "Keep a change log",
      "Document each automation",
      "Hand over ownership and remove access",
    ],
    tools: "Run history screens, a change-log sheet, and documentation pages.",
    taglish:
      "Hindi tapos ang automation kapag naka-on na. Regular na i-check ang run history at maglagay ng alert para sa failure at sa pagkawala ng runs. Itala ang bawat pagbabago: ano, bakit, sino ang nag-approve, at kailan. Mag-test sa kopya bago galawin ang live. Gumawa ng isang pahinang dokumento para sa bawat automation. Kapag aalis, ilipat ang ownership sa client at alisin ang access mo.",
    proTips: [
      "Add an alert for 'no runs today' on days when orders normally arrive.",
      "Store the one-page document next to the automation, not on your laptop.",
    ],
    deepDive: [
      [
        "Read the health signals",
        "Compare runs with real activity. If the form got thirty entries and the automation ran twenty-eight times, find the two. Check any record that was skipped by a filter to be sure the filter is correct.",
      ],
      [
        "Hand over cleanly",
        "Give the client a list of automations, connections, owners, and fallbacks. Confirm they can log in and run the manual steps. Remove personal access only after the client confirms. Keep a record of the handoff date.",
      ],
    ],
    practiceData:
      "Fictional situation: The form added a 'gluten-free' yes/no question last week. The automation still shows successful runs, but the sheet has no gluten-free column. Run history: 30 form entries, 30 runs, 0 failures. The engagement ends in two weeks.",
    modelAnswer:
      "Runs look healthy but the new field is dropped, so the risk is silent data loss. The fix is mapping the field to a new column in the test copy, re-running the test cases, then updating live and logging the change with date, reason, and owner approval. The one-page document lists purpose, trigger, steps, accounts, fallback, tests, and limits. Handoff steps are transferring ownership, confirming the owner can run the fallback, removing personal access, and recording the date.",
  },
];
const automationModuleIndex = modules.length;
modules.push([
  "Automation without the risk",
  "Map, build, secure, monitor, and hand over no-code automations responsibly.",
  "Advanced workflow",
  automationLessons,
]);
automationLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${automationModuleIndex}-${index}`,
    mi: automationModuleIndex,
    li: index,
  });
});
