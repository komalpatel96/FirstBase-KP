# FirstBase
<!-- SEEDS -->

SELECT * FROM admin_db.classes;
INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Hath Yoga", "9:15AM", "10:30AM", 101, 25, 8, "Yoga", "Slow paced elementary Vinyasa class that explores core postures, principles and functions of yoga for anyone");

INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Yin Yoga", "4:15PM", "5:30PM", 102, 30, 15, "Yoga", "Within this class each are integrated to restore energy balance. Beginning with longer holding, meditative stretching, the sequence progresses into vinyassa/flow movement, before slowing to rest.");

INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Prenatal", "8:30PM", "9:30PM", 103, 15, 5, "Prenatal", "Our prenatal classes are designed to meet the needs of pregnancy and motherhood. Strengthen and relax your body, ease your mind and connect with your baby in a safe and supportive environment.");


INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Playful Flow", "11:30AM", "12:45PM", 104, 20, 7, "Flow", "This solid, light-hearted flow class is filled with creative sequencing that invites curiosity, wonder and joy.");

INSERT INTO classes (className, startTime, endTime, instructorID, limitPpl, enrolledPpl, category, description)
VALUES ("Pilates Mat Fundamentals", "1:30PM", "2:45PM", 105, 25, 17, "Pilates", " All exercises are tailored to the individual body to support your fitness and wellness goals.");



SELECT * FROM admin_db.instructors;
INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("John Somerhalder", "John has studied yoga since 1991. He has since lived in 7 countries (in Asia, USA and Latin America) and experimented with ways of peace and happiness found in each country.", "Hath Yoga", "/assets/img/fitness-instructor-3.png");

INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("Anna Lang", "Anna is known for her powerful practice, intuitive understanding of the body and her creative, and engaging teaching style. ", "Yin Yoga", "/assets/img/fitness-instructor-6.jpg");

INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("Raoul Masters", "His experience in music and the magic of music in yoga, meditation and life is immense.", "Prenatal", "/assets/img/fitness-instructor-54.jpg");

INSERT INTO instructors (fullName, bio, teachClass, photo)
VALUES ("Lucy Rosetti", "Emily truly believes that yoga can heal our wounds - physical, mental, and emotional. Yoga is a safe space to be yourself and to show up just as you are without judgments, doubts, fears, or expectations.", "Playful Flow", "/assets/img/fitness-instructor-4.jpg");

