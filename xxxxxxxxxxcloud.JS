// JavaScript to handle form submission and smooth scrolling (if needed)

document.querySelector('.domain-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const domainName = document.querySelector('input[name="query"]').value;
    
    if (domainName) {
        alert(`Checking availability for: ${domainName}`);
    } else {
        alert('Please enter a domain name.');
    }
});
