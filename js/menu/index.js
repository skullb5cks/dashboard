import Element from '../common/Element';
import Component from '../common/Component';
import eventUtils from '../event/utils';

class Menu extends Component {
	
	render() {
		const {
			data = [],
			element
		} = this;
		
		data.forEach(({ label, location }) => {
			var li = new Element({ tag: 'li', dataset: {
				label,
				location
			}}).element;
			li.innerHTML = label;
			eventUtils.on(li, 'click', (e) => {
				this.moveTo(location)
			});
			element.appendChild(li);
		});
	}

	moveTo(location) {
		console.log(location);
	}
}

export default Menu;