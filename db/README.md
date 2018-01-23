# FirstBase
<!-- SEEDS -->

SELECT * FROM admin_db.classes;
INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Hath Yoga", "9:15AM", "10:30AM", 101, 25, 8, "Yoga", "Hatha simply refers to the practice of physical yoga postures, meaning your Ashtanga, vinyasa, Iyengar and Power Yoga classes are all Hatha Yoga");

INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Yin Yoga", "4:15PM", "5:30PM", 102, 30, 15, "Yoga", "Yin yoga is a slow-paced style of yoga with postures, or asanas, that are held for longer periods of time—for beginners, it may range from 45 seconds to two minutes; more advanced practitioners may stay in one asana for five minutes or more.");

INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Bikram Yoga", "8:30PM", "9:30PM", 103, 15, 5, "Yoga", "Bikram Yoga is a system of yoga that Bikram Choudhury synthesized from traditional hatha yoga techniques. All Bikram Yoga Beginning Series classes run for 90 minutes and consist of the same series of 26 postures, including two breathing exercises.");


INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Playful Flow", "11:30AM", "12:45PM", 104, 20, 7, "Flow", "This solid, light-hearted flow class is filled with creative sequencing that invites curiosity, wonder and joy.");

INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Pilates Mat Fundamentals", "1:30PM", "2:45PM", 105, 25, 17, "Pilates", "Pilates is a form of exercise that emphasizes the balanced development of the body through core strength, flexibility, and awareness.");



SELECT * FROM admin_db.instructors;
INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("John Somerhalder", "John has studied yoga since 1991. He has since lived in 7 countries (in Asia, USA and Latin America) and experimented with ways of peace and happiness found in each country.", "Hath Yoga", "/assets/img/fitness-instructor-3.png");

INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("Anna Lang", "Anna is known for her powerful practice, intuitive understanding of the body and her creative, and engaging teaching style. ", "Yin Yoga", "/assets/img/fitness-instructor-6.jpg");

INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("Raoul Masters", "His experience in music and the magic of music in yoga, meditation and life is immense.", "Bikram Yoga", "/assets/img/fitness-instructor-54.jpg");

INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("Lucy Rosetti", "Emily truly believes that yoga can heal our wounds - physical, mental, and emotional. Yoga is a safe space to be yourself and to show up just as you are without judgments, doubts, fears, or expectations.", "Pilates Mat Fundamentals", "/assets/img/fitness-instructor-4.jpg");

