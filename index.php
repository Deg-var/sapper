<!DOCTYPE html>
<html lang="ru">
<link rel="stylesheet" href="style.css">

<head>
    <meta charset="utf-8">
    <title>Miner</title>
</head>

<body>
    <div class="okno">
        <form>
            <div class="diffi">
            </div>
            <div class="field">
                Размер поля <select name="field" id="field">
                    <option value="25">Маленькое</option>
                    <option value="100">Среднее</option>
                    <option value="225">Выше среднего</option>
                    <option value="400">Большое</option>
                </select>
                Сложность<select name="bomb" id="bomb">
                    <option value="0.1">Легко</option>
                    <option value="0.2">Средне</option>
                    <option value="0.3">Сложно</option>
                    <option value="0.4">Очень сложно</option>
                </select>
                <input type="submit" class="but" value="Ok!"><br>
                <div class="info">
                    <div class="ff">Размер поля</div>
                    <div class="fff"></div>
                    <div class="bb">Бомб на поле </div>
                    <div class="bcount" id="bcount">0</div>
                </div>
        </form>
        <div class="fieldd">
            <?php require("cell.php") ?>
        </div>
        <div class="disp_b">999
        </div>
    </div><div class="lose">Одна нога сдесь другая там</div>
    <div class="win">Пока что все на месте. Еще партейку?</div>
    <script>
        let field = document.querySelector(".fieldd");
        let cell = document.querySelectorAll(".cell");
        var count = '<? echo $CELL ?>';
        var bombb = '<? echo $BOMB ?>';
        field.style.width = "calc( " + Math.sqrt(count) + "*31px )";
    </script>
    <script src="random.js"></script>
</body>