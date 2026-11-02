/* Marketing info for each program.
   level:   "Beginner" | "Intermediate" | "Advanced"  (leave "" to show no difficulty badge)
   rated:   true shows a "Highly Rated" badge
   copy:    the overview shown at the top of the program page (plain text; blank line = new paragraph) */
window.PROGRAM_INFO = {
  "1kb-vagabond": { level: "Beginner", rated: false,
    builtFor: "Built for newer lifters, or anyone training at home or on the road with a single kettlebell. This program builds strength, muscle and full-body power from a handful of core movements you'll get better at every week.",
    primaryGoals: ["Muscle Gain", "Strength", "Total Body Power"],
    sessionTimes: {"All weeks": ["30–40", "30–40", "30–40", "30–40"]},
    copy:
`A four-day program built around a single kettlebell, so you can train anywhere with minimal gear. Days alternate between squat/press and hinge/row patterns, pairing ballistic lifts like cleans, snatches and swings with presses, lunges and carries.

Six weeks move through hypertrophy, strength capacity and strength blocks, two weeks each, using the same core movements so you can focus on skill and consistency.` },

  "2kb-vagabond": { level: "Beginner", rated: false,
    builtFor: "Built for trainees who are comfortable with basic kettlebell lifts and own a pair of bells. This program builds muscle and full-body power with double-kettlebell work and bodyweight pulling and pressing.",
    primaryGoals: ["Muscle Gain", "Total Body Power"],
    sessionTimes: {"Week A": ["35–45", "35–45", "35–45", "35–45"], "Week B": ["35–45", "35–45", "35–45", "35–45"]},
    copy:
`The two-kettlebell version of Vagabond: four days a week of double-bell cleans, swings, front-rack lunges and presses, plus pull-ups, dips and push-up variations.

Weeks 1–3 build volume with descending-rep ladders on the big double-bell lifts; weeks 4–6 shift to heavier, straighter sets with new exercise variations to keep progress moving.` },

  "alpha-bravo-hp1": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who know the barbell basics and want a balanced five-day week. This program builds muscle and strength on the main lifts while steady cardio develops a solid conditioning base.",
    primaryGoals: ["Muscle Gain", "Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["30–40", "40–50", "30–40", "40–50", "30–40"], "Week B": ["30–40", "40–50", "25–35", "45–55", "35–45"]},
    copy:
`A five-day upper/lower split with two dedicated cardio days. Barbell bench, squat and deadlift lead each strength day, followed by unilateral work, accessories and core.

Hypertrophy and strength capacity weeks alternate, so you get a higher-rep week followed by a heavier week, every week for six weeks, while the steady aerobic intervals build your conditioning base.` },

  "alpha-bravo-sp1": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who know the barbell basics and want to push heavier on the main lifts. This program prioritizes strength on the bench, squat, deadlift and pull-up, with cardio to support recovery and work capacity.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "40–50", "35–45", "40–50", "30–40"], "Week B": ["40–50", "40–50", "35–45", "45–55", "35–45"]},
    copy:
`A five-day upper/lower split with two cardio days, built around heavier main-lift work than its HP sibling. Bench, squat, deadlift and pull-ups lead each session, backed by single-leg work and accessories.

Alternating hypertrophy and strength capacity weeks keep the stimulus varied, while the longer aerobic intervals support recovery and work capacity.` },

  "axios-ppl-6-day": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who recover well and want high training frequency. This program trains every muscle group twice a week, building size first and then turning it into strength.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"Week A": ["40–50", "45–55", "40–50", "30–40", "30–40", "35–45"], "Week B": ["40–50", "40–50", "40–50", "30–40", "30–40", "35–45"]},
    copy:
`A classic six-day push/pull/legs split for lifters who want high frequency and high volume. Each muscle group is trained twice a week, with a heavy barbell lift leading every session followed by plenty of accessory work.

Weeks 1–3 focus on hypertrophy; weeks 4–6 move to strength capacity with heavier top sets, so the program builds size first and then turns it into strength.` },

  "bellator-phase-1": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters with a training base who want a classic bodybuilding-style split. This program builds muscle and strength side by side, with interval cardio to keep conditioning and body composition in check.",
    primaryGoals: ["Muscle Gain", "Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "45–55", "35–45", "45–55", "40–50", "40–50"], "Week B": ["45–55", "45–55", "35–45", "45–55", "45–55", "40–50"]},
    copy:
`A six-day bodybuilding-style split (chest/triceps/delts, back/lats/biceps, legs/core, arms/shoulders) with two cardio days. Each session opens with a barbell lift using tempo or pause work, then builds out with dumbbell and bodyweight accessories.

Hypertrophy and strength capacity weeks alternate so you train size and strength side by side, while the interval cardio keeps your conditioning in check.` },

  "bellator-phase-2": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who have finished Bellator Phase 1 or have a similar split under their belt. This program brings heavier loading and new main lifts to keep size and strength moving forward.",
    primaryGoals: ["Muscle Gain", "Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "45–55", "35–45", "50–60", "40–50", "40–50"], "Week B": ["45–55", "45–55", "35–45", "45–55", "45–55", "40–50"]},
    copy:
`Phase 2 of Bellator keeps the six-day body-part split and two cardio days, swapping in new main lifts (incline bench, pause squat, standing press, snatch-grip deadlift) and heavier loading.

Alternating hypertrophy and strength capacity weeks continue to push both size and strength, building directly on Phase 1.` },

  "bludkrieg": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who are comfortable with the main barbell lifts and can train four days a week. This program builds strength and muscle on a short list of lifts, so you can watch the weights climb week to week.",
    primaryGoals: ["Strength", "Muscle Gain"],
    sessionTimes: {"All weeks": ["30–40", "30–40", "30–40", "30–40"]},
    copy:
`A four-day barbell-focused program pairing a squat or pull with a press or hinge each day. Back squat, close-grip bench, bent row and incline bench anchor the week.

Six weeks move through hypertrophy, strength capacity and strength, two weeks each, with the same exercises throughout so you can watch the loads climb.` },

  "boneyard": { level: "Beginner", rated: false,
    builtFor: "Built for newer lifters, or anyone short on time who can train three days a week. This program teaches structured barbell training and builds a foundation of strength and muscle with a few lifts done well.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"Week A": ["25–35", "20–30", "25–35"], "Week B": ["20–30", "25–35", "20–30"]},
    copy:
`A simple, efficient three-day program: one lower-body, one upper-body and one total-body strength day. Each session leads with a barbell lift and adds a few targeted accessories.

Hypertrophy and strength capacity weeks alternate, making this a great entry point to structured barbell training or a solid option when time is tight.` },

  "centurion-phase-2": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters with solid technique on the squat, bench and deadlift who want to get significantly stronger. This program pushes the main lifts toward heavy top sets while interval cardio keeps you conditioned.",
    primaryGoals: ["Strength", "Aerobic Endurance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "30–40", "35–45", "30–40", "35–45"], "Week B": ["40–50", "30–40", "40–50", "30–40", "50–60"]},
    copy:
`A five-day strength program with two interval cardio days. Back squat, bench press and deadlift are trained hard, with top sets climbing toward 85–90% over the six weeks.

Strength and max-strength weeks alternate, giving you heavy exposure to the main lifts while the accessory work and cardio keep you balanced and conditioned.` },

  "centurion-phase-3": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters coming off Centurion Phase 2 or another heavy strength block. This program locks in strength on the main lifts with high-set, low-rep work, supported by interval cardio.",
    primaryGoals: ["Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["45–55", "40–50", "40–50", "40–50", "45–55"], "Week B": ["55–65", "40–50", "45–55", "40–50", "40–50"]},
    copy:
`Phase 3 of Centurion keeps the five-day layout of three strength days and two interval cardio days, rotating squat, bench, deadlift and standing press variations.

Strength capacity and strength weeks alternate, including high-set, low-rep work on the main lifts, to lock in the strength built in Phase 2.` },

  "darkwater-1kb": { level: "Intermediate", rated: false,
    builtFor: "Built for trainees with a training base who work out at home or with minimal equipment. This program uses one kettlebell and bodyweight work to build muscle, power, core strength and conditioning.",
    primaryGoals: ["Muscle Gain", "Total Body Power", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["35–45", "35–45", "35–45", "35–45", "35–45", "40–50"], "Week B": ["35–45", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`A six-day program built around a single kettlebell plus bodyweight work: upper days, lower/core days and two cardio days. Pull-ups, dips, swings and single-arm kettlebell lifts carry most of the load.

Hypertrophy and strength capacity weeks alternate, making this a strong option for home or minimal-equipment training that still covers strength, power and conditioning.` },

  "darkwater-2kb": { level: "Intermediate", rated: false,
    builtFor: "Built for trainees with a training base and a pair of kettlebells at home. This program builds muscle, power and work capacity with double-bell lifts, pull-ups, dips and regular cardio.",
    primaryGoals: ["Muscle Gain", "Total Body Power", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["35–45", "35–45", "35–45", "35–45", "35–45", "40–50"], "Week B": ["35–45", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`The two-kettlebell version of Darkwater: six days of upper, lower/core and cardio sessions built around double-bell swings, front-rack split squats and presses, plus pull-ups and dips.

Alternating hypertrophy and strength capacity weeks build muscle and work capacity with minimal equipment.` },

  "darkwater-phase-1": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters with the basics in place who want a well-rounded six-day week. This program develops size and strength while core work and interval cardio build durability and an aerobic base.",
    primaryGoals: ["Muscle Gain", "Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"], "Week B": ["35–45", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`A six-day program alternating upper days, lower/core days and cardio. Pull-ups, dips, split squats and deadlifts form the backbone, with core and mobility work built into every lower day.

Hypertrophy and strength capacity weeks alternate to develop both size and strength, while two interval cardio days build your aerobic base.` },

  "darkwater-phase-2": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters coming off Darkwater Phase 1 or a similar program. This program introduces new pulling, squatting and deadlift variations to keep building muscle, with plenty of core work throughout.",
    primaryGoals: ["Muscle Gain", "Mobility / Core Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "50–60", "45–55", "40–50"], "Week B": ["40–50", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`Phase 2 of Darkwater keeps the six-day upper / lower-core / cardio structure and introduces new variations: close-grip and dead-stop pull-ups, box squats and isometric deadlifts.

Alternating hypertrophy and strength capacity weeks continue the progression from Phase 1, with plenty of core work throughout.` },

  "darkwater-phase-3": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who have completed earlier Darkwater phases or have comparable experience. This program uses more demanding variations of the key movements to build muscle, strength and a strong, stable core.",
    primaryGoals: ["Muscle Gain", "Strength", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["40–50", "45–55", "35–45", "40–50", "40–50", "40–50"], "Week B": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"]},
    copy:
`The final Darkwater phase moves to push/pull and legs/core days alongside two cardio days, with advanced variations like L-sit pull-ups, pause squats and sumo deadlifts.

Hypertrophy and strength capacity weeks alternate to round out the Darkwater series with more demanding versions of its key movements.` },

  "deimos-phase-1": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who can handle six training days with heavy barbell work. This program trains strength, power and size in the same week, with aerobic work to support recovery.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "35–45", "25–35", "30–40", "35–45", "20–30"], "Week B": ["35–45", "40–50", "25–35", "30–40", "35–45", "20–30"]},
    copy:
`A six-day program with dedicated lower strength, upper strength, lower power and upper hypertrophy days, plus two aerobic cardio days. Barbell deadlifts, bench and presses lead each session.

Hypertrophy and strength capacity weeks alternate, training strength, power and size in a single week while the aerobic work supports recovery.` },

  "deimos-phase-2": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters coming off Deimos Phase 1 or a similar program. This program raises the demand with new main lifts and harder intervals, then finishes with an unload week to recover.",
    primaryGoals: ["Strength", "Muscle Gain", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["35–45", "40–50", "15–25", "30–40", "30–40", "25–35"], "Week B": ["40–50", "45–55", "15–25", "30–40", "35–45", "25–35"]},
    copy:
`Phase 2 of Deimos keeps the strength / power / hypertrophy day structure and two cardio days, with new main lifts and harder aerobic intervals.

Six weeks of alternating hypertrophy and strength capacity training finish with a seventh unload week to recover before the next phase.` },

  "deimos-phase-3": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who have run the earlier Deimos phases. This program caps the series with heavier top sets and longer aerobic intervals to push strength and conditioning further.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "35–45", "25–35", "30–40", "35–45", "35–45"], "Week B": ["35–45", "35–45", "25–35", "35–45", "35–45", "35–45"]},
    copy:
`The final Deimos phase continues the six-day strength, power and hypertrophy structure with longer aerobic capacity intervals.

Alternating hypertrophy and strength capacity weeks build on Phases 1 and 2, with box squats, pause work and heavier top sets on the main lifts.` },

  "drago": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who want to be strong, explosive and muscular at the same time. This program combines heavy barbell days, kettlebell power work and hypertrophy days with mixed-interval cardio.",
    primaryGoals: ["Strength", "Total Body Power", "Muscle Gain"],
    sessionTimes: {"Week A": ["35–45", "30–40", "35–45", "35–45", "35–45"], "Week B": ["40–50", "40–50", "35–45", "35–45", "35–45", "40–50"]},
    copy:
`A six-day program pairing lower and upper strength days with a lower power day and an upper hypertrophy day, plus cardio. Back squat, deadlift, incline bench and bent row anchor the week, with kettlebell power work mixed in.

Hypertrophy and strength capacity weeks alternate to develop strength, power and muscle together, supported by mixed-interval cardio.` },

  "echelon": { level: "Beginner", rated: false,
    builtFor: "Built for newer lifters who want a full week of training with plenty of conditioning. This program keeps the same exercises all six weeks so you can focus on technique as the weights climb, while cardio builds your engine.",
    primaryGoals: ["Muscle Gain", "Strength", "Metabolic Conditioning"],
    sessionTimes: {"All weeks": ["45–55", "50–60", "40–50", "50–60", "50–60", "35–45"]},
    copy:
`A six-day program with two press/squat days, two row/hinge days and two conditioning days. Incline bench, standing press, bent row and pull-ups lead the strength work.

The same exercises run all six weeks while the loading moves through hypertrophy, strength capacity and strength blocks, two weeks each, so you can focus on technique as the weights climb. The cardio days mix steady work with harder aerobic intervals.` },

  "falcata": { level: "Beginner", rated: false,
    builtFor: "Built for newer trainees, or anyone who wants to move better before chasing heavy weights. This program teaches control on the squat and bench, with heavy core and mobility work and regular cardio.",
    primaryGoals: ["Mobility / Core Strength", "Fitness Maintenance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"], "Week B": ["40–50", "40–50", "35–45", "45–55", "40–50", "45–55"]},
    copy:
`A six-day program with legs/core and push/pull days plus two cardio days. Tempo and pause variations of the squat and bench teach control, and a heavy dose of core and mobility work supports every lower day.

Hypertrophy and strength capacity weeks alternate, making this a well-rounded program for building good movement habits along with fitness.` },

  "fizeek-5-day-template": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters with gym experience whose main goal is building muscle. This program delivers steady muscle-building volume across five days, using barbells, dumbbells, cables and machines.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"All weeks": ["35–45", "35–45", "35–45", "35–45", "40–50"]},
    copy:
`A five-day physique split: chest/triceps/delts, back/lats/biceps, quads/hams/glutes, push/pull and legs/back/core. Each day leads with a barbell or dumbbell compound lift followed by machine, cable and dumbbell accessories.

Designed for steady muscle-building volume across the week.` },

  "ground-based-calisthenics-mobility": { level: "Beginner", rated: false,
    builtFor: "Built for anyone training at home with no equipment, or recovering between harder blocks. This program builds upper-body strength with push-up progressions and improves hip, spine and ankle mobility.",
    primaryGoals: ["Mobility / Core Strength", "Strength", "Muscle Gain"],
    sessionTimes: {"All weeks": ["35–45", "35–45", "35–45", "35–45"]},
    copy:
`A four-day, equipment-free program alternating push days with core and mobility days. Push-up progressions build upper-body strength while the core/mobility days work hips, spine and ankles.

A great option for training at home, building a movement foundation, or recovering between harder blocks.` },

  "gym-based-functional-strength": { level: "Beginner", rated: false,
    builtFor: "Built for newer lifters with access to a full gym who want straightforward, all-round strength. This program builds a muscle base first, then moves into heavier strength work, with core training and cardio throughout.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "30–40", "25–35", "40–50", "35–45", "25–35"], "Week B": ["30–40", "25–35", "25–35", "40–50", "35–45", "25–35"]},
    copy:
`A six-day program with two lower-body strength days, two upper-body strength days and two cardio days. Squats, RDLs, pulldowns and presses lead the sessions, with core work and functional accessories.

Weeks 1–3 build a hypertrophy base and weeks 4–6 move into strength capacity, making this a straightforward full-gym program for building all-round strength.`,
    includesNote: "Built for a full gym: barbell, dumbbells, cables and a squat rack. If yours is missing something, swaps cover it." },

  "halcyon-phase-1": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who prefer a four-day body-part split and know their way around the gym. This program builds size first and then strength, finishing with an unload week to recover.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"All weeks": ["35–45", "40–50", "40–50", "40–50"]},
    copy:
`A four-day body-part split: shoulders/arms, back, chest/triceps and legs. Each day opens with a heavy barbell lift and follows with focused accessory work.

Weeks 1–3 are hypertrophy, weeks 4–6 move to strength capacity, and week 7 is an unload week to recover before what comes next.` },

  "htk-phase-1": { level: "Beginner", rated: false,
    builtFor: "Built for newer trainees who want a hybrid of lifting and hard conditioning. This program rotates muscle, strength and power focus while circuits and cardio build fitness and help with fat loss.",
    primaryGoals: ["Muscle Gain", "Strength", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["45–55", "45–55", "20–30", "45–55", "55–65", "45–55"], "Week B": ["40–50", "40–50", "30–40", "45–55", "55–65", "60–70"], "Week C": ["35–45", "45–55", "45–55", "40–50", "55–65", "90–100"]},
    copy:
`A six-day hybrid program combining strength, hypertrophy, metabolic circuits and cardio. Bench, squat and deadlift lead the strength days, with kettlebell and bodyweight work in the circuits.

Weeks run on a three-week rotation of hypertrophy, strength capacity and strength, repeated twice, so each quality gets focused attention.` },

  "htk-phase-2": { level: "Intermediate", rated: false,
    builtFor: "Built for trainees coming off HTK Phase 1 or with similar hybrid training experience. This program adds more power work and sprint intervals to build strength, explosiveness and conditioning.",
    primaryGoals: ["Strength", "Metabolic Conditioning", "Muscle Gain"],
    sessionTimes: {"Week A": ["40–50", "45–55", "20–30", "45–55", "50–60", "20–30"], "Week B": ["45–55", "45–55", "30–40", "45–55", "50–60", "60–70"], "Week C": ["45–55", "45–55", "45–55", "45–55", "50–60", "90–100"]},
    copy:
`Phase 2 of HTK adds more power and metabolic work to the six-day hybrid structure: trap bar deadlifts and jumps, kettlebell snatches and sprint intervals alongside the main barbell lifts.

The three-week hypertrophy / strength capacity / strength rotation repeats twice, building on Phase 1.` },

  "htk-phase-3": { level: "Advanced", rated: false,
    builtFor: "Built for experienced hybrid trainees who have completed the earlier HTK phases. This program pairs heavy barbell work with power days and sprint intervals in the most demanding sessions of the series.",
    primaryGoals: ["Strength", "Total Body Power", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["40–50", "45–55", "20–30", "45–55", "50–60", "20–30"], "Week B": ["40–50", "45–55", "30–40", "45–55", "50–60", "60–70"], "Week C": ["45–55", "50–60", "30–40", "40–50", "50–60", "60–70"]},
    copy:
`The final HTK phase pairs heavy barbell work with power days, upper-body metabolic conditioning and sprint intervals.

The three-week hypertrophy / strength capacity / strength rotation repeats twice to cap off the series with its most demanding sessions.` },

  "imperium-phase-1": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who want to push top-end strength and speed. This program trains the squat, deadlift and bench at high intensity with dedicated power days and cardio for balance.",
    primaryGoals: ["Strength", "Fitness Maintenance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"], "Week B": ["45–55", "40–50", "35–45", "45–55", "45–55", "40–50"]},
    copy:
`A six-day strength-focused program with lower and upper strength days, lower and upper power days and two cardio days. Squat, deadlift and bench variations are trained at high intensity with wave-style loading.

Strength capacity and strength weeks alternate to build top-end strength and speed.` },

  "jacked-and-athletic": { level: "Intermediate", rated: false,
    builtFor: "Built for established trainees who have the basics dialed in. This program increases your capacity to use strength in athletic demands, while improving conditioning and power endurance in dynamic movement patterns.",
    primaryGoals: ["Muscle Gain", "Strength", "Total Body Power"],
    /* Session lengths from Volt, Day 1–6, per rotation (includes warm-up) */
    sessionTimes: { "Week A": ["50–60", "45–55", "20–30", "45–55", "45–55", "20–30"], "Week B": ["50–60", "45–55", "30–40", "45–55", "40–50", "30–40"] },
    copy:
`A six-day program for building muscle and athleticism together: push/pull and lower/core days with built-in max-effort intervals and steady endurance work.

Weighted pull-ups, pause bench, tempo squats and deadlifts lead the strength work, with kettlebell and medicine ball power work and plenty of conditioning. Hypertrophy and strength capacity weeks alternate throughout.` },

  "kerberos": { level: "Beginner", rated: false,
    builtFor: "Built for newer trainees whose priority is conditioning and fat loss while still building muscle. This program mixes metabolic circuits, strength work and cardio across a full six-day week.",
    primaryGoals: ["Fat Loss", "Metabolic Conditioning", "Muscle Gain"],
    sessionTimes: {"Week A": ["45–55", "40–50", "35–45", "45–55", "45–55", "35–45"], "Week B": ["45–55", "45–55", "35–45", "40–50", "45–55", "35–45"], "Week C": ["45–55", "35–45", "35–45", "40–50", "45–55", "35–45"]},
    copy:
`A six-day hybrid program mixing metabolic conditioning circuits, hypertrophy, total-body strength and cardio. Dumbbell, kettlebell and bodyweight circuits sit alongside trap bar and bench work.

A three-week hypertrophy / strength capacity / strength rotation repeats twice, with a strong focus on conditioning and fat loss.` },

  "kilo-bravo": { level: "Beginner", rated: false,
    builtFor: "Built for newer lifters, or anyone with only kettlebells and three days a week to train. This program builds total-body power and strength with a small set of double- and single-bell lifts.",
    primaryGoals: ["Total Body Power"],
    sessionTimes: {"Week A": ["30–40", "30–40", "30–40"], "Week B": ["30–40", "30–40", "30–40"]},
    copy:
`A three-day kettlebell program alternating press/squat and hinge/row sessions. Double-bell cleans, presses and swings plus single-arm snatches build total-body power and strength.

Simple, efficient and easy to fit into a busy week, with nothing more than kettlebells.` },

  "kreuzer-phase-1": { level: "Advanced", rated: false,
    builtFor: "Built for experienced trainees who want serious aerobic capacity without losing muscle. This program pairs hypertrophy and power work with hard intervals and long steady cardio sessions.",
    primaryGoals: ["Aerobic Endurance", "Muscle Gain", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["40–50", "40–50", "40–50", "40–50", "35–45", "60–70"], "Week B": ["40–50", "40–50", "55–65", "40–50", "35–45", "45–55"]},
    copy:
`A six-day program with lower/core hypertrophy and power days, upper strength and upper metabolic circuit days, plus two cardio days that mix hard intervals with long steady endurance work.

Hypertrophy and strength capacity weeks alternate to build muscle, power and serious aerobic capacity.` },

  "opr-8-phase-1": { level: "Advanced", rated: false,
    builtFor: "Built for experienced trainees who want athletic performance, not just gym numbers. This program blends heavy lifting, explosive throws and jumps, and aerobic work to build a powerful, well-conditioned base.",
    primaryGoals: ["Total Body Power", "Strength", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["40–50", "40–50", "55–65", "50–60", "50–60", "45–55"], "Week B": ["40–50", "40–50", "55–65", "40–50", "50–60", "45–55"], "Week C": ["40–50", "40–50", "55–65", "40–50", "50–60", "45–55"]},
    copy:
`A six-day performance program blending strength, aerobic work, hypertrophy/general prep and explosive power. Medicine ball throws, trap bar jumps, kettlebell ballistics and sled work sit alongside the main barbell lifts.

Six weeks move through hypertrophy, strength capacity and strength blocks, two weeks each, building an athletic, well-conditioned base.` },

  "reaver-phase-1": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who want separate strength and size days each week. This program drives muscle and strength with an upper/lower split, while aerobic intervals support recovery.",
    primaryGoals: ["Muscle Gain", "Strength", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["35–45", "40–50", "35–45", "40–50", "35–45", "25–35"], "Week B": ["35–45", "40–50", "35–45", "40–50", "45–55", "45–55"], "Week C": ["35–45", "40–50", "35–45", "35–45", "45–55", "45–55"]},
    copy:
`A six-day upper/lower program with separate strength and hypertrophy days for each, plus two cardio days. Bench, squat, high-incline press and stiff-legged deadlifts lead the sessions.

Hypertrophy and strength capacity weeks alternate to drive both size and strength, with aerobic intervals supporting recovery.` },

  "reaver-phase-2": { level: "Advanced", rated: false,
    builtFor: "Built for lifters coming off Reaver Phase 1 or a similar upper/lower program. This program rotates in new pressing and deadlift variations to keep building size and strength.",
    primaryGoals: ["Muscle Gain", "Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "45–55", "35–45", "45–55", "40–50", "35–45"], "Week B": ["35–45", "45–55", "35–45", "45–55", "40–50", "35–45"]},
    copy:
`Phase 2 of Reaver keeps the six-day upper/lower strength and hypertrophy structure with two cardio days, rotating in standing press, snatch-grip and sumo deadlifts.

Alternating hypertrophy and strength capacity weeks build on Phase 1.` },

  "ultima-phase-1": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters who train in a well-equipped gym and want a body-part split. This program builds muscle with machines, cables and dumbbells, with regular cardio for conditioning.",
    primaryGoals: ["Muscle Gain", "Fitness Maintenance", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["50–60", "50–60", "40–50", "55–65", "55–65", "45–55"], "Week B": ["45–55", "45–55", "40–50", "55–65", "50–60", "45–55"]},
    copy:
`A six-day body-part split (back/lats/biceps, chest/triceps/delts, quads/hams/glutes, arms/shoulders/core) with two cardio days, built heavily around machines, cables and dumbbells.

Weeks 1–3 build hypertrophy and weeks 4–6 move to strength capacity with new exercise choices, making this ideal for a well-equipped gym.` },

  "ultima-phase-2": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters coming off Ultima Phase 1 or a similar machine-based split. This program adds heavier loading on the lead lifts to keep muscle and strength progressing.",
    primaryGoals: ["Muscle Gain", "Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["45–55", "45–55", "40–50", "40–50", "45–55", "40–50"], "Week B": ["45–55", "45–55", "40–50", "45–55", "50–60", "45–55"]},
    copy:
`Phase 2 of Ultima continues the six-day machine-and-cable body-part split with two cardio days, with heavier pyramid loading on the lead lifts.

Weeks 1–3 focus on hypertrophy and weeks 4–6 on strength capacity, building on Phase 1.` },

  "warhorse": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who want to train heavy and stay well conditioned. This program pushes the squat, deadlift, bench and weighted pull-up, with metabolic intervals and long steady cardio.",
    primaryGoals: ["Strength", "Muscle Gain", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["40–50", "40–50", "30–40", "40–50", "40–50", "40–50"], "Week B": ["40–50", "40–50", "40–50", "40–50", "40–50", "40–50"], "Week C": ["45–55", "40–50", "40–50", "45–55", "45–55", "40–50"]},
    copy:
`A six-day program with squat/press, hinge/pull and press/squat, pull/hinge days plus two conditioning days. Squat, deadlift, bench and weighted pull-ups are trained heavy, supported by machine and dumbbell accessories.

Six weeks move through hypertrophy, strength capacity and strength, two weeks each, alongside metabolic intervals and long steady cardio.` },

  "warpig": { level: "Intermediate", rated: false,
    builtFor: "Built for lifters with a training base who prefer single-leg and single-arm work over heavy barbell lifts. This program builds muscle and strength while interval and steady cardio build your engine.",
    primaryGoals: ["Muscle Gain", "Strength", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["45–55", "45–55", "40–50", "45–55", "50–60", "40–50"], "Week B": ["50–60", "45–55", "40–50", "45–55", "50–60", "40–50"]},
    copy:
`A six-day program with squat/press and pull/hinge days plus two cardio days. Split squats, lunges, single-arm rows, pull-ups and dips carry the strength work, with machine accessories.

Hypertrophy and strength capacity weeks alternate, with aerobic intervals and steady cardio building your engine.` },

  "warpony": { level: "Beginner", rated: false,
    builtFor: "Built for newer lifters who want an approachable five-day week. This program uses mostly dumbbell, machine and cable work to build muscle, with interval and steady cardio for fitness and fat loss.",
    primaryGoals: ["Muscle Gain", "Fat Loss", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["30–40", "30–40", "30–40", "20–30", "30–40"], "Week B": ["30–40", "30–40", "30–40", "30–40", "30–40"]},
    copy:
`A five-day program with squat/press and hinge/row days plus two cardio days. Dumbbell split squats, presses and rows lead the sessions, with barbell, machine and cable support.

Hypertrophy and strength capacity weeks alternate, with interval and steady cardio for a well-rounded, approachable program.` },

  "wolfdog-phase-1": { level: "Advanced", rated: false,
    builtFor: "Built for experienced lifters who want to get stronger on the squat, bench and deadlift through high frequency. This program trains the main lifts often, with top sets climbing toward 90% of your max.",
    primaryGoals: ["Strength", "Muscle Gain"],
    sessionTimes: {"All weeks": ["40–50", "40–50", "40–50", "45–55", "45–55", "45–55"]},
    copy:
`A six-day strength program cycling legs/core, push/pull and back/lats/traps twice a week. Back squat, bench and deadlift and their pause and stiff-legged variations are trained with high frequency.

Six weeks move through hypertrophy, strength capacity and strength, two weeks each, with top sets climbing toward 90%.` }
};

/* "What Does this Program Come With?" section, shown on every program page.
   {weeks} is replaced with the program's length. The closing note defaults to a line about the
   equipment list; set includesNote on a program above to give it its own line. */
window.PROGRAM_INCLUDES = {
  title: "What Does this Program Come With?",
  lead: "This page shows the plan. Buying it puts the plan in a coaching app that adjusts to you.",
  items: [
    { h: "Premium coaching app", lines: [
      "All {weeks} weeks are loaded into the app, day by day.",
      "Open it at the gym and follow the session in order.",
      "Log your sets as you go, so every week builds on the last." ] },
    { h: "Loads that adjust to how you feel (RPE)", lines: [
      "RPE means rate of perceived exertion: a 1–10 score for how hard a set felt.",
      "Each working set has a target effort.",
      "Set felt easier than the target? Add weight. Harder? Take some off.",
      "The percentages on this page are the starting point. Your RPE adjusts them each session." ] },
    { h: "Swaps and replacements", lines: [
      "Equipment taken or missing? Swap in an approved replacement.",
      "A movement doesn't suit you? Same fix.",
      "Each replacement trains the same movement pattern, so the program keeps its structure." ] },
    { h: "Ongoing support", lines: [
      "Questions about a lift, a load or how the program is going? Reach out and get an answer.",
      "Technical help with the app is included, from setup to logging your sessions.",
      "Reset the program and run it again any time.",
      "Support comes with every run, so you can always reach out." ] }
  ],
  note: "Missing something from the equipment list above? Swaps cover it.",
  noEquipNote: "No equipment needed. If a movement doesn't suit you, swaps cover it."
};

/* Upgrade section at the bottom of every program page: makes the case for the
   Custom Program / Accountability service. Its link is UPGRADE_LINK in links.js. */
window.PROGRAM_UPGRADE = {
  eyebrow: "Want it built around you?",
  teaser: "Get a custom program",
  title: "Custom Program + Accountability",
  lead: "This program is written for a general lifter with a standard week. A custom program starts from your week instead.",
  points: [
    { h: "Written for you", p: "Your days per week, your equipment, your goals and your starting point." },
    { h: "Regular check-ins", p: "A coach reviews how your training is going and gives you guidance." },
    { h: "Accountability", p: "Scheduled check-ins keep you consistent from one week to the next." }
  ],
  button: "Get my custom program",
  price: "$100 / month"
};

/* Training Club pitch at the bottom of the main program list. The button links to CLUB_LINK in links.js. */
window.CLUB_PITCH = {
  eyebrow: "By application",
  title: "Join the Axios Training Club",
  lead: "Training Club members get every program in this library, not just one.",
  points: [
    { h: "Every program, one membership", p: "All {count} programs. Move from one phase or program to the next without buying each one." },
    { h: "Costs less than buying programs one at a time", p: "A single program is $50. Membership starts at $25 per month for the full library." },
    { h: "Membership is selective", p: "Training Club is limited to members who qualify. The intake survey tells us if it's the right fit." }
  ],
  button: "Take the intake survey",
  note: "See if you qualify"
};

/* Program bundles in progress. Programs, price and Kit link are added later; until then each shows as Coming soon. */
window.BUNDLES = [
  { id: "kettlebell", name: "Kettlebell Program Bundle",
    short: "Train anywhere with one or two kettlebells.",
    copy: `Programs built around one or two kettlebells, for training at home, on the road, or anywhere space is tight.

Each program uses a small set of kettlebell lifts done well, so you build strength, muscle and power without a full gym.`,
    who: "Anyone who trains with kettlebells, wants a minimal-equipment setup, or needs programs that travel." },
  { id: "strength", name: "Strength Program Bundle",
    short: "Get stronger on the squat, bench press and deadlift.",
    copy: `Programs focused on getting stronger on the main barbell lifts: the squat, bench press and deadlift.

Loads climb in planned steps across each program, with accessory work to keep you balanced and healthy under heavier weights.`,
    who: "Lifters comfortable with the main barbell lifts who want strength to be the priority." },
  { id: "hybrid", name: "Hybrid Program Bundle",
    short: "Lifting and conditioning in the same week.",
    copy: `Programs that combine strength training with structured conditioning, so you build muscle, strength and fitness at the same time.

Each week mixes lifting days with interval and steady cardio work, without one getting in the way of the other.`,
    who: "Trainees who want to look and perform better without choosing between the weight room and cardio." },
  { id: "athlete-tactical", name: "Athlete / Tactical Performance Bundle",
    short: "Power, speed, strength and conditioning that carry over.",
    copy: `Programs that develop power, speed, strength and conditioning for sport, service or physically demanding work.

Explosive lifts, throws and sprint work sit alongside heavy strength training and hard conditioning, so your fitness carries over outside the gym.`,
    who: "Athletes, military, law enforcement and first responders, or anyone who needs fitness that performs under real-world demands." },
  { id: "work-capacity", name: "Work Capacity & Stamina Bundle",
    short: "Build your engine: work hard, recover fast, repeat.",
    copy: `Programs that build your engine: the ability to work hard, recover quickly and repeat the effort.

Circuits, intervals and steady endurance work are paired with strength training, so you get fitter without losing the muscle you have built.`,
    who: "Anyone who runs out of gas early, wants better endurance, or wants more conditioning in their training week." },
  { id: "gym-beginner", name: "Gym Beginner Bundle",
    short: "A clear, step-by-step start in a full gym.",
    copy: `Programs that introduce structured gym training step by step, starting with the main lifts and simple weekly layouts.

Each program builds on the last, so you learn the movements, build a base of strength and muscle, and always know what to do next.`,
    who: "New lifters, or anyone returning after time off, who wants a clear plan to follow in a full gym." },
  { id: "core-mobility", name: "Core & Mobility Bundle",
    short: "A stronger trunk and better-moving hips, spine and shoulders.",
    copy: `Programs that strengthen your core and improve how your hips, spine and shoulders move.

Control, stability and range of motion are trained directly, so everyday movement and your other training feel better.`,
    who: "Anyone who feels stiff, wants a stronger core, or wants to move better alongside their main training." }
];
