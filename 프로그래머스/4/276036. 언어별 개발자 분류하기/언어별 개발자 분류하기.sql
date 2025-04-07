SELECT (
    CASE WHEN (SKILL_CODE & (SELECT SUM(CODE) FROM SKILLCODES WHERE CATEGORY LIKE 'Front%')) AND (SKILL_CODE & (SELECT SUM(CODE) FROM SKILLCODES WHERE NAME LIKE 'Python')) THEN 'A'
    WHEN (SKILL_CODE & (SELECT SUM(CODE) FROM SKILLCODES WHERE NAME LIKE 'C#')) THEN 'B'
    WHEN (SKILL_CODE & (SELECT SUM(CODE) FROM SKILLCODES WHERE CATEGORY LIKE 'Front%')) THEN 'C'
    ELSE NULL
END) AS GRADE, ID, EMAIL
FROM DEVELOPERS
HAVING GRADE IS NOT NULL
ORDER BY GRADE, ID ASC;