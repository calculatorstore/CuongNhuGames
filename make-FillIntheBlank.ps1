$COE = @"
The Code of Ethics of Cuong Nhu Martial Arts

1. Cuong Nhu students should strive to improve themselves and their abilities in the martial arts in order to serve the people.

2. All students should be faithful to the ideals of Cuong Nhu and attempt to spread and develop these beliefs within the younger generation so that they, too, may be morally and physically fit. 

3. All members of Cuong Nhu are unified in spirit and respect each other and their instructors.

4. Only by absolute discipline of mind, body and spirit do students maintain honor in Cuong Nhu.

5. All members should respect all other styles of martial arts and only use martial arts techniques for self-defense and to protect truth and reason.

6. Cuong Nhu students, through dedicated daily practice, increase their spirit, stamina, and moral character.

7. The goal of Cuong Nhu students is to maintain a pure, simple, sincere, and noble life.

8. Self-confidence, self-control, modesty, and a non-defeatist attitude are the mental keynotes for students of Cuong Nhu.
"@

$COE | 
%{$_ -replace "(?<=[a-zA-Z])[a-zA-Z]", (([char] 8239) + "_") } |
%{$_ -replace " ", "  " }