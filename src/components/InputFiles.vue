<template>
  <div>
    文件上传模块
    <mu-form-item  label="添加附件">
        <mu-text-field
          label-float
          full-width
          v-model="form.files"
          @click="handleClick"
          readonly
          :action-icon="form.files?'cancel':''"
          :action-click="()=>form.files=''"
        ></mu-text-field>
      </mu-form-item>
      <input
        id="uploaderInput"
        class
        type="file"
        accept=".doc, .docx, .xlsx, .xls"
        @change="handleFilesInput(arguments[0])"
        style="display:none;"
      >
  </div>
</template>
