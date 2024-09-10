// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addBlogBtn = document.getElementById('addBlogBtn');
    const blogForm = document.getElementById('blogForm');
    const blogFormElement = document.getElementById('blogFormElement');
    const cancelBtn = document.getElementById('cancelBtn');
    const blogsContainer = document.getElementById('blogsContainer');
    let blogs = [];
    let editIndex = -1;

    function renderBlogs() {
        blogsContainer.innerHTML = '';
        blogs.forEach((blog, index) => {
            const blogEntry = document.createElement('div');
            blogEntry.className = 'blog-entry';
            blogEntry.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
                <button onclick="editBlog(${index})">Edit</button>
                <button onclick="deleteBlog(${index})">Delete</button>
            `;
            blogsContainer.appendChild(blogEntry);
        });
    }

    function resetForm() {
        blogFormElement.reset();
        blogForm.classList.add('hidden');
        editIndex = -1;
    }

    addBlogBtn.addEventListener('click', () => {
        blogForm.classList.remove('hidden');
        document.getElementById('formTitle').textContent = 'Add New Blog';
    });

    cancelBtn.addEventListener('click', resetForm);

    blogFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('blogTitle').value;
        const content = document.getElementById('blogContent').value;

        if (editIndex === -1) {
            blogs.push({ title, content });
        } else {
            blogs[editIndex] = { title, content };
        }

        renderBlogs();
        resetForm();
    });

    window.editBlog = (index) => {
        const blog = blogs[index];
        document.getElementById('blogTitle').value = blog.title;
        document.getElementById('blogContent').value = blog.content;
        document.getElementById('blogId').value = index;
        document.getElementById('formTitle').textContent = 'Edit Blog';
        blogForm.classList.remove('hidden');
        editIndex = index;
    };

    window.deleteBlog = (index) => {
        blogs.splice(index, 1);
        renderBlogs();
    };
});
