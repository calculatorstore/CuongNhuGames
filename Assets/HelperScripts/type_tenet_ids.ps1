cls
1..8 | %{
$Num = $_
@"
  <label for="tenet${Num}">Tenet ${Num}: </label>
  <span id ="status${Num}">placeholder${Num}</span>
  <span class="tooltip" id="tooltipContainer${Num}">
    <i class="fa fa-question-circle"></i>
    Hint
    <span class="tooltiptext" id ="tooltip${Num}">Tooltip text</span> 
    </span>
  <br>
  <textarea id="tenet${Num}" rows="4" oninput="checkTenet(${Num})" style="width:100%;resize:none" autocomplete="new-password"></textarea><br>
  <span id="explanation${Num}" style="width:100%; display:none;">
    <button type="button" id="collapseButton${Num}" onclick="expandcollapse(${Num})">Show Explanation...</button><br>
    <textarea id = "collapseText${Num}" rows="4" readonly="true" disabled="true" style="width:100%; resize:none; display:none; background-color:lightgray; color:black;"></textarea>
  </span><br>

"@
}

