export const editorConfig = `# https://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = crlf
indent_size = 2
indent_style = tab
insert_final_newline = true
max_line_length = 120
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0`;
