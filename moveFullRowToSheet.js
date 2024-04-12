/**
 * @author u/juddaaaa <https://www.reddit.com/user/juddaaaaa/>
 * @description Moves a row from one sheet to another, given the source sheet (with its row and column) and the terget sheet (with its row and column)
 * @license MIT
 * @version 1
 */

/**
 * Given the source sheet, the source row and the source column, this function moves a row to the target sheet at the target row and target column
 * @param { Object<GoogleAppsScript.Spreadsheet.Sheet> } sourceSheet
 * @param { Number } sourceRow
 * @param { Number } sourceColumn
 * @param { Object<GoogleAppsScript.Spreadsheet.Sheet> } targetSheet
 * @param { Number } targetRow
 * @param { Number } targetColumn
 * @returns { Array }
 */
function moveFullRowToSheet(sourceSheet, sourceRow, sourceColumn, targetSheet, targetRow, targetColumn) {
  const lastColumn = sourceSheet.getLastColumn()
  const offset = lastColumn - lastColumn + (sourceColumn - 1)
  const rowRange = sourceSheet.getRange(sourceRow, sourceColumn, 1, lastColumn - offset)
  const data = rowRange.getValues().flat()

  targetSheet.getRange(targetRow, targetColumn, 1, data.length).setValues([data])
  sourceSheet.deleteRow(sourceRow)

  return data
}
