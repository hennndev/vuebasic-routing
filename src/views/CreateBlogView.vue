<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup'
    

    const schema = yup.object({
        blogTitle: yup.string().required('Blog title is required!'),
        blogAuthor: yup.string().required('Blog author is required!'),
        blogCategory: yup.string().required('Blog category is required!'),
        blogContent: yup.string().required('Blog content is required!'),
    })

    const handleSubmit = (values) => {
        addBlog({
            ...values,
            id: new Date().getTime(),
            createdAt: new Date()
        })
        // console.log(values)
    }
</script>

<template>
    <main class="container px-4 mt-10">
        <h1 class="text-2xl font-bold text-[#181818]">#Create-New-Blog</h1>
        <Form @submit="handleSubmit" :validation-schema="schema" class="p-5">
            <!-- BLOG TITLE -->
            <div class="form-control">
                <label for="blogTitle" class="form-label">Blog Title</label>
                <Field type="text" name="blogTitle" id="blogTitle" class="form-input" placeholder="Input blog title here..."/>
                <ErrorMessage name="blogTitle" class="form-input-error"/>
            </div>
            <!-- BLOG AUTHOR -->
            <div class="form-control">
                <label for="blogAuthor" class="form-label">Blog Author</label>
                <Field type="text" name="blogAuthor" id="blogAuthor" class="form-input" placeholder="Input blog author here..."/>
                <ErrorMessage name="blogAuthor" class="form-input-error"/>
            </div>
            <div class="form-control">
                <label for="blogCategory" class="form-label">Blog Category</label>
                <Field as="select" name="blogCategory" id="blogCategory" class="form-input">
                    <option value="" selected>Choose Category</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                </Field>
                <ErrorMessage name="blogCategory" class="form-input-error"/>
            </div>
            <div class="form-control">
                <label for="blogContent" class="form-label">Blog Content</label>
                <Field rows="10" as="textarea" name="blogContent" id="blogContent" class="form-input" placeholder="Input blog content here..."/>
                <ErrorMessage name="blogContent" class="form-input-error"/>
            </div>
            <button type="submit" class="mt-5 border-none outline-none bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-md">Submit new blog</button>
        </Form>
    </main>
</template>



